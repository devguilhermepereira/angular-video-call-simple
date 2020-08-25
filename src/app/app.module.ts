import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AppRoutingModule} from './app-routing.module';
import {LayoutsModule} from './layouts/layouts.module';
import {VideoCallModule} from './pages/video-call/video-call.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgxSpinnerModule,
    AppRoutingModule,
    LayoutsModule,
    VideoCallModule,
    DashboardModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
