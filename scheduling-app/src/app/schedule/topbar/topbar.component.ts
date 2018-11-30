import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  _isTextMode: boolean | string;
  get isTextMode(): boolean | string {
    return this._isTextMode;
  };

  set isTextMode(value: boolean | string) {
    this._isTextMode = value;
    localStorage.setItem("isTextMode", this._isTextMode.toString());
  }

  constructor() {
    this.getTextModeStatus();
  }

  ngOnInit() {

  }

  getTextModeStatus = () => {
    this.isTextMode = localStorage.getItem("isTextMode") == 'true';
  }

}
