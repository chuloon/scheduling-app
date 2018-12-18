import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-event-panel',
  templateUrl: './event-panel.component.html',
  styleUrls: ['./event-panel.component.scss']
})
export class EventPanelComponent implements OnInit {
  @Input() event;

  constructor() { }

  ngOnInit() {
  }

  getEventTimeString = (event) => {
    return moment(event.startTime).format("h:mm a") + " - " + moment(event.endTime).format("h:mm a");
  }

}
