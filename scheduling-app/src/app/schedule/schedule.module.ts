import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './topbar/topbar.component';
import { MomentModule } from 'ngx-moment';
import { TextScheduleComponent } from './text-schedule/text-schedule.component';
import { TagFilterPipe } from './pipes/tag-filter.pipe';

@NgModule({
  declarations: [
      ScheduleComponent,
      SidebarComponent,
      SchedulePageComponent,
      FilterSectionComponent,
      TopbarComponent,
      TextScheduleComponent,
      TagFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MomentModule
  ]
})
export class ScheduleModule { }
