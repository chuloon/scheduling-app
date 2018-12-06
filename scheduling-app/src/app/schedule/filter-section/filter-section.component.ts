import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  _section;
  @Input() get section() {
    return this._section;
  }
  @Output() sectionChange = new EventEmitter<any>();

  set section(value) {
    this._section = value;
  }

  constructor() { }

  ngOnInit() {
  }

  getId = (id: string) => {
    return id.replace(/ /g, '-');
  }

  checkboxChange = (item) => {
    this.sectionChange.emit(this.section);
  }
}
