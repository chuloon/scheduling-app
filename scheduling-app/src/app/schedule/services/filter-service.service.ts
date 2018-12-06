import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterSections = [
    {
      title: "Gaming and Tournaments",
      items: [
        { name: "League of Legends", checked: true },
        { name: "Overwatch", checked: false },
        { name: "Hearthstone", checked: false },
        { name: "Fortnite", checked: false },
      ]
    }
  ];

  constructor() { }
}
