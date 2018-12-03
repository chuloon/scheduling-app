import { Day } from './../enums/Day';

export class Event {
    day: Day;
    name: string;
    startTime: string;
    endTime: string;
    tags?: string[] = [];
  }