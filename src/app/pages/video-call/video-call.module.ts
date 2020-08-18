import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCallComponent } from './video-call.component';
import {NgxSpinnerService} from 'ngx-spinner';



@NgModule({
  declarations: [VideoCallComponent],
  imports: [
    CommonModule
  ],
  providers: [
    NgxSpinnerService
  ]
})
export class VideoCallModule { }
