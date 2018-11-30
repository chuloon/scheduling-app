import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  availableTimes: DayData[] = [
    {
      day: "Friday",
      start: "12:00 pm",
      end: "11:30 pm"
    },
    {
      day: "Saturday",
      start: "12:00 am",
      end: "11:30 pm"
    },
    {
      day: "Sunday",
      start: "12:00 am",
      end: "5:30 pm"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getTimesForDay = (dayData: DayData) => {
    let times = [];

    const startTime = moment(dayData.start, "h:mm a");
    const endTime = moment(dayData.end, "h:mm a");
    let currentTime = startTime;
    
    while(currentTime.isSameOrBefore(endTime)) {
      times.push(currentTime.format("h:mm a"));
      currentTime.add(30, 'm');
    }

    return times;
  }

  showDayLabel = (day: DayData, i: number) => {
    if(i == 0) return day.day;
    else return null;
  }

  getLabelId = (day: DayData, i: number) => {
    return i == 0 ? day.day.toLowerCase() + '-label' : '';
  }

  scheduleScroll = (event) => {
    const scrollPosition = event.target.scrollTop;
    const dayHeights = this.getAllDayHeightsInPixels();

    for(let i = 1; i < dayHeights.length-1; i++) {
      if(scrollPosition >= this.getHeightSum(dayHeights, i-1) && scrollPosition < this.getHeightSum(dayHeights, i)) {
        this.removeStickyClasses();
        document.getElementById(this.availableTimes[i-1].day.toLowerCase() + "-label").classList.add("sticky");
        document.getElementsByClassName("time")[1].classList.add("sticky-helper");
      }
    }
  }

  removeStickyClasses = () => {
    for(let i = 0; i < this.availableTimes.length; i++) {
        document.getElementById(this.availableTimes[i].day.toLowerCase() + "-label").classList.remove("sticky");
    }
  }

  getAllDayHeightsInPixels = () => {
    const dayHeight = [];

    dayHeight.push(0);

    this.availableTimes.forEach((day) => {
      dayHeight.push(this.getDayHeightInPixels(day));
    });

    dayHeight.push(1000000)

    return dayHeight;
  }

  getDayHeightInPixels = (day: DayData) => {
    const times = this.getTimesForDay(day);
    return times.length * 30;
  }

  getHeightSum = (dayHeights: number[], index: number) => {
    let sum = 0;

    for(let i = 1; i < index+1; i++) {
      sum += dayHeights[i];
    }

    return sum;
  }

}

class DayData {
  day: string;
  start: string;
  end: string;
}