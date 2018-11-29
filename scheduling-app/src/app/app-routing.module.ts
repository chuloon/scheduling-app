import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulePageComponent } from './schedule/schedule-page/schedule-page.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
