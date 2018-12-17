import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidebarService } from '../services/sidebar-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() isTextMode: boolean;
  @Output() textModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public sidebarService: SidebarService) {
  }

  ngOnInit() {

  }

  modeChange = (event) => {
    this.textModeChange.emit(this.isTextMode);
  }

}
