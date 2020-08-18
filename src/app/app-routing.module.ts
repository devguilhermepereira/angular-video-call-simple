import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {VideoCallComponent} from './pages/video-call/video-call.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'video-call', component: VideoCallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
