import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {RoomConnectModel} from '../models/roomConnect.model';

@Injectable({
  providedIn: 'root'
})
export class VideoCallService {

  constructor(private http: HttpClient) {
  }

  getToken(roomConnectModel: RoomConnectModel): Observable<any> {
    return this.http.post(`${environment.server}/public/twilio/token`, roomConnectModel);
  }
}
