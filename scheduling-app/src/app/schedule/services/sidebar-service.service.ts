import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isSidebarExpanded: boolean = false;

  constructor() { }

  setSidebarExpanded = (value) => {
    this.isSidebarExpanded = value;
  }
}
