import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterSectionSource = new BehaviorSubject<any>([
    {
      title: "Gaming and Tournaments",
      items: [
        { name: "League of Legends", checked: true, tag: "league-of-legends" },
        { name: "Overwatch", checked: false, tag: "overwatch" },
        { name: "Hearthstone", checked: false, tag: "hearthstone" },
        { name: "Fortnite", checked: false, tag: "fortnite" },
      ]
    }
  ]);

  filterSections = this.filterSectionSource.asObservable();

  changeSection(item) {
    this.filterSectionSource.next(item);

    console.log("filter section changed: ", this.filterSectionSource.getValue());
  }

  constructor() {
   }
}
