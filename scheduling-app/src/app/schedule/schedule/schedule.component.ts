import { FilterService } from './../services/filter-service.service';
import { EventTrack } from './../classes/EventTrack';
import { Event } from './../classes/Event';
import { Day } from './../enums/Day';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { DayData } from '../classes/DayData';
import { Subscription, Observable } from '../../../../node_modules/rxjs';
import * as _ from 'lodash';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() selectedDay;
  @Input() eventsToDisplay;

  _isTextMode: boolean | string;
  get isTextMode(): boolean | string {
    return this._isTextMode;
  };

  set isTextMode(value: boolean | string) {
    this._isTextMode = value;
    localStorage.setItem("isTextMode", this._isTextMode.toString());
  }

  displaySchedule: boolean = false;

  events: Observable<any[]>;
  formattedEvents = {};

  eventColors;
  eventColorsObservable: Observable<any>;

  constructor(public db: AngularFirestore) {
    this.events = db.collection('/events').valueChanges();
    this.eventColorsObservable = db.collection('/colors').doc('/tag-colors').valueChanges();
  }

  ngOnInit() {
    this.getScheduleMode();

    this.setupSubscriptions();
  }

  setupSubscriptions = () => {
    this.eventColorsObservable.subscribe(colors => this.setColors(colors));
    this.events.subscribe(events => this.formatEvents(events));
  }

  setColors = (colors) => {
    this.eventColors = colors;
  }

  formatEvents = (events) => {
    this.formattedEvents = {};
    events.forEach((event) => {
      const day = moment(event.startTime).format("dddd");
      const time = moment(event.startTime).format("HH:mm a");

      //if startTime's day of week doesn't exist within formattedEvents
      if(!this.startTimeIsInFormattedEvents(day)) {
        //add a new array for that day of the week
        this.formattedEvents[day] = {};
      }

      //if startTime's time doesn't exist within that day of the week's array
      if(!this.startTimeIsInDayArray(day, time)) {
        //add the time to that day of the week
        this.formattedEvents[day][time] = [];
      }

      //push the event to that day of the week's time's array
      this.formattedEvents[day][time].push(event);
    });

    console.log("Firestore Call Completed");
    console.log(this.formattedEvents);
    this.displaySchedule = true;
  }

  startTimeIsInFormattedEvents = (day): boolean => {
    return this.formattedEvents[day] != undefined;
  }

  startTimeIsInDayArray = (day, time): boolean => {
    return this.formattedEvents[day][time] != undefined;
  }

  getScheduleMode = () => {
    this.isTextMode = localStorage.getItem("isTextMode") == "true";
  }

  textModeChange = (event) => {
    this.isTextMode = event;
  }

  getFormattedTime = (time) => {
    return moment(time, "hh:mm a").format("h:mm a");
  }

  getBackgroundColor = (tags: string[]) => {
    let backgroundColor = "auto"

    if(this.eventColors) {
      tags.forEach((tag) => {
        if(this.eventColors[tag]) backgroundColor = this.eventColors[tag];
      });
    }
    return backgroundColor;
  }
}