import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {NgxSpinnerService} from 'ngx-spinner';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ],
  providers: [
    NgxSpinnerService
  ]
})
export class DashboardModule { }
