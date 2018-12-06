import { Component, OnInit, Input } from '@angular/core';
import { EventTrack } from '../classes/EventTrack';
import { DayData } from '../classes/DayData';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-text-schedule',
  templateUrl: './text-schedule.component.html',
  styleUrls: ['./text-schedule.component.scss']
})
export class TextScheduleComponent implements OnInit {
  @Input() availableTimes: DayData[];
  @Input() scheduleData: EventTrack[];
  scheduleDataFormatted = [];
  scheduleDataCopy = [];
  showSchedule = false;

  constructor() { }

  ngOnInit() {
    this.formatScheduleData();
  }

  formatScheduleData = () => {
    this.availableTimes.forEach((day) => {
      this.scheduleDataCopy.push({
        day: day.day,
        events: []
      })
    });

    this.scheduleData.forEach((track) => {
      track.events.forEach((event) => {
        this.scheduleDataCopy[this.getDayIndex(event)].events.push({
          day: event.day,
          name: event.name,
          startTime: event.startTime,
          startTime24: moment(event.startTime, "h:mm a").format("HH:mm"),
          endTime: event.endTime,
          endTime24: moment(event.endTime, "h:mm a").format("HH:mm"),
          tags: event.tags
        });
      });
    });

    this.sortDayEvents();
    this.scheduleDataFormatted = this.scheduleDataCopy;
    this.showSchedule = true;
  }

  getDayIndex = (event): number => {
    const index: number = _.findIndex(this.scheduleDataCopy, (x) => {
      return x.day == event.day;
    });
    
    return index;
  }

  sortDayEvents = () => {
    this.scheduleDataCopy.forEach((day, i) => {
      this.scheduleDataCopy[i].events = _.orderBy(day.events, ['startTime24', 'endTime24'], ['asc', 'asc']);
    });
  }

}
