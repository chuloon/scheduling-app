import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  exports: [
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
