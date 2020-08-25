import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {NgxSpinnerService} from 'ngx-spinner';
import {AngularModule} from '../../layouts/angular.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {VideoCallService} from '../../services/video-call.service';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AngularModule,
    FlexLayoutModule,
  ],
  providers: [
    NgxSpinnerService,
    VideoCallService
  ]
})
export class DashboardModule {
}
