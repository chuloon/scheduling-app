import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isSidebarExpanded: boolean = false;

  constructor() {
    if(window.innerWidth > 768) {
      this.isSidebarExpanded = true;
    }
   }

  setSidebarExpanded = (value) => {
    this.isSidebarExpanded = value;
  }
}
