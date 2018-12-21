import { FilterService } from './../services/filter-service.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  fridaySelected: boolean = true;
  saturdaySelected: boolean = true;
  sundaySelected: boolean = true;

  constructor(public filterService: FilterService) { }

  ngOnInit() {
  }

  checkBoxChange = (section) => {
    this.filterService.changeSection([section]);
  }

  getSectionIndex = (title: string): number => {
    const index: number = _.findIndex(this.filterService.filterSections, (x) => {
      return x.title == title;
    });

    return index;
  }

}
