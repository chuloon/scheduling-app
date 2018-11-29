import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  fridaySelected: boolean = true;
  saturdaySelected: boolean = true;
  sundaySelected: boolean = true;
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

  ngOnInit() {
  }

}
