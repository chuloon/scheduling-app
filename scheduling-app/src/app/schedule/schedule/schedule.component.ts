import { EventTrack } from './../classes/EventTrack';
import { Day } from './../enums/Day';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DayData } from '../classes/DayData';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  trackColors = [
    "#cc0f00",
    "#E54100",
    "#E5AA00",
    "#34B700",
    "#00B78B",
    "#009CCC",
    "#0064CC",
    "#A0009B"
  ];
  availableTimes: DayData[] = [
    {
      day: Day.Friday,
      start: "12:00 pm",
      end: "11:30 pm"
    },
    {
      day: Day.Saturday,
      start: "12:00 am",
      end: "11:30 pm"
    },
    {
      day: Day.Sunday,
      start: "12:00 am",
      end: "5:30 pm"
    }
  ];
  scheduleData: EventTrack[] = [
    {
      trackNumber: 0,
      events: [
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament Signups",
          startTime: "12:00 pm",
          endTime: "12:30 pm",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament",
          startTime: "12:30 pm",
          endTime: "4:00 pm",
          tags: [
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends ARAM Flash Tournament Signups",
          startTime: "10:00 pm",
          endTime: "12:00 am",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Saturday,
          name: "League of Legends ARAM Flash Tournament",
          startTime: "12:00 am",
          endTime: "2:00 am",
          tags: [
            "league-of-legends"
          ]
        }
      ]
    },
    {
      trackNumber: 1,
      events: [
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament Signup",
          startTime: "4:00 pm",
          endTime: "6:00 pm",
          tags: [
            "signup",
            "fortnite"
          ]
        },
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament",
          startTime: "6:00 pm",
          endTime: "9:30 pm",
          tags: [
            "fortnite"
          ]
        }
      ]
    },
    {
      trackNumber: 2,
      events: [
        {
          day: Day.Friday,
          name: "Overwatch Check In",
          startTime: "4:30 pm",
          endTime: "5:30 pm",
          tags: [
            "signup",
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 1",
          startTime: "5:30 pm",
          endTime: "7:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 2",
          startTime: "7:30 pm",
          endTime: "9:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Finals Bo5",
          startTime: "9:30 pm",
          endTime: "12:00 am",
          tags: [
            "overwatch"
          ]
        }
      ]
    },
    {
      trackNumber: 0,
      events: [
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament Signups",
          startTime: "12:00 pm",
          endTime: "12:30 pm",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament",
          startTime: "12:30 pm",
          endTime: "4:00 pm",
          tags: [
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends ARAM Flash Tournament Signups",
          startTime: "10:00 pm",
          endTime: "12:00 am",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Saturday,
          name: "League of Legends ARAM Flash Tournament",
          startTime: "12:00 am",
          endTime: "2:00 am",
          tags: [
            "league-of-legends"
          ]
        }
      ]
    },
    {
      trackNumber: 1,
      events: [
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament Signup",
          startTime: "4:00 pm",
          endTime: "6:00 pm",
          tags: [
            "signup",
            "fortnite"
          ]
        },
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament",
          startTime: "6:00 pm",
          endTime: "9:30 pm",
          tags: [
            "fortnite"
          ]
        }
      ]
    },
    {
      trackNumber: 2,
      events: [
        {
          day: Day.Friday,
          name: "Overwatch Check In",
          startTime: "4:30 pm",
          endTime: "5:30 pm",
          tags: [
            "signup",
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 1",
          startTime: "5:30 pm",
          endTime: "7:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 2",
          startTime: "7:30 pm",
          endTime: "9:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Finals Bo5",
          startTime: "9:30 pm",
          endTime: "12:00 am",
          tags: [
            "overwatch"
          ]
        }
      ]
    },
    {
      trackNumber: 0,
      events: [
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament Signups",
          startTime: "12:00 pm",
          endTime: "12:30 pm",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament",
          startTime: "12:30 pm",
          endTime: "4:00 pm",
          tags: [
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends ARAM Flash Tournament Signups",
          startTime: "10:00 pm",
          endTime: "12:00 am",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Saturday,
          name: "League of Legends ARAM Flash Tournament",
          startTime: "12:00 am",
          endTime: "2:00 am",
          tags: [
            "league-of-legends"
          ]
        }
      ]
    },
    {
      trackNumber: 1,
      events: [
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament Signup",
          startTime: "4:00 pm",
          endTime: "6:00 pm",
          tags: [
            "signup",
            "fortnite"
          ]
        },
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament",
          startTime: "6:00 pm",
          endTime: "9:30 pm",
          tags: [
            "fortnite"
          ]
        }
      ]
    },
    {
      trackNumber: 2,
      events: [
        {
          day: Day.Friday,
          name: "Overwatch Check In",
          startTime: "4:30 pm",
          endTime: "5:30 pm",
          tags: [
            "signup",
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 1",
          startTime: "5:30 pm",
          endTime: "7:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 2",
          startTime: "7:30 pm",
          endTime: "9:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Finals Bo5",
          startTime: "9:30 pm",
          endTime: "12:00 am",
          tags: [
            "overwatch"
          ]
        }
      ]
    },
    {
      trackNumber: 0,
      events: [
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament Signups",
          startTime: "12:00 pm",
          endTime: "12:30 pm",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends Flash Tournament",
          startTime: "12:30 pm",
          endTime: "4:00 pm",
          tags: [
            "league-of-legends"
          ]
        },
        {
          day: Day.Friday,
          name: "League of Legends ARAM Flash Tournament Signups",
          startTime: "10:00 pm",
          endTime: "12:00 am",
          tags: [
            "signup",
            "league-of-legends"
          ]
        },
        {
          day: Day.Saturday,
          name: "League of Legends ARAM Flash Tournament",
          startTime: "12:00 am",
          endTime: "2:00 am",
          tags: [
            "league-of-legends"
          ]
        }
      ]
    },
    {
      trackNumber: 1,
      events: [
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament Signup",
          startTime: "4:00 pm",
          endTime: "6:00 pm",
          tags: [
            "signup",
            "fortnite"
          ]
        },
        {
          day: Day.Friday,
          name: "Fortnite Flash Tournament",
          startTime: "6:00 pm",
          endTime: "9:30 pm",
          tags: [
            "fortnite"
          ]
        }
      ]
    },
    {
      trackNumber: 2,
      events: [
        {
          day: Day.Friday,
          name: "Overwatch Check In",
          startTime: "4:30 pm",
          endTime: "5:30 pm",
          tags: [
            "signup",
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 1",
          startTime: "5:30 pm",
          endTime: "7:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Semifinals Bo3 Round 2",
          startTime: "7:30 pm",
          endTime: "9:00 pm",
          tags: [
            "overwatch"
          ]
        },
        {
          day: Day.Friday,
          name: "Overwatch Finals Bo5",
          startTime: "9:30 pm",
          endTime: "12:00 am",
          tags: [
            "overwatch"
          ]
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  getTimesForDay = (dayData: DayData) => {
    let times = [];

    const startTime = moment(dayData.start, "h:mm a");
    const endTime = moment(dayData.end, "h:mm a");
    let currentTime = startTime;

    while (currentTime.isSameOrBefore(endTime)) {
      times.push(currentTime.format("h:mm a"));
      currentTime.add(30, 'm');
    }

    return times;
  }

  showDayLabel = (day: DayData, i: number) => {
    if (i == 0) return day.day;
    else return null;
  }

  getLabelId = (day: DayData, i: number) => {
    return i == 0 ? day.day.toLowerCase() + '-label' : '';
  }

  scheduleScroll = (event) => {
    const scrollPosition = event.target.scrollTop;
    const dayHeights = this.getAllDayHeightsInPixels();

    for (let i = 1; i < dayHeights.length - 1; i++) {
      if (scrollPosition >= this.getHeightSum(dayHeights, i - 1) && scrollPosition < this.getHeightSum(dayHeights, i)) {
        this.removeStickyClasses();
        document.getElementById(this.availableTimes[i - 1].day.toLowerCase() + "-label").classList.add("sticky");
        document.getElementsByClassName("time")[1].classList.add("sticky-helper");
      }
    }
  }

  removeStickyClasses = () => {
    for (let i = 0; i < this.availableTimes.length; i++) {
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

    for (let i = 1; i < index + 1; i++) {
      sum += dayHeights[i];
    }

    return sum;
  }

  getSlotBackgroundColor = (slotNumber: number) => {
    while(slotNumber >= this.trackColors.length) {
      slotNumber -= this.trackColors.length;
    }

    return this.trackColors[slotNumber];
  }
}