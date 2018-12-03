import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatSlideToggleModule } from '@angular/material';
import { OrderByPipe } from './pipes/orderBy';

@NgModule({
  declarations: [
    OrderByPipe
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  exports: [
    MatCheckboxModule,
    MatSlideToggleModule,
    OrderByPipe
  ]
})
export class SharedModule { }
