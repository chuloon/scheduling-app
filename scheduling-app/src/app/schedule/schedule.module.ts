import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      ScheduleComponent,
      SidebarComponent,
      SchedulePageComponent,
      FilterSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class ScheduleModule { }
