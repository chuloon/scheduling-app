import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './topbar/topbar.component';
import { TextScheduleComponent } from './text-schedule/text-schedule.component';
import { TagFilterPipe } from './pipes/tag-filter.pipe';
import { EventPanelComponent } from './event-panel/event-panel.component';

@NgModule({
  declarations: [
      ScheduleComponent,
      SidebarComponent,
      SchedulePageComponent,
      FilterSectionComponent,
      TopbarComponent,
      TextScheduleComponent,
      TagFilterPipe,
      EventPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ScheduleModule { }
