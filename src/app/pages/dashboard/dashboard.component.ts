import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';
import {VideoCallService} from '../../services/video-call.service';
import {RoomConnectModel} from '../../models/roomConnect.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public roomConnect: RoomConnectModel;

  constructor(private router: Router, private spinner: NgxSpinnerService, private snackBar: MatSnackBar, private videoCallService: VideoCallService) {
    this.roomConnect = new RoomConnectModel();
  }

  createRoom(): void {
    if (!this.roomConnect.name || !this.roomConnect.participant) {
      this.openSnackBar('Preencha os campos para criar a sala!', 'X');
    } else {
      this.spinner.show();
      this.videoCallService.getToken(this.roomConnect).subscribe((res) => {
        this.router.navigate(['video-call'], {state: {token: res}}).then(() => this.spinner.hide());
      }, error => this.openSnackBar(error, 'X'));
    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {duration: 2000});
  }
}
