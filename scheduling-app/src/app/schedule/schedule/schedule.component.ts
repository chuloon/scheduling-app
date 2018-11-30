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
    console.log("Friday times: ", this.getTimesForDay(this.availableTimes[1]));
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

}

class DayData {
  day: string;
  start: string;
  end: string;
}