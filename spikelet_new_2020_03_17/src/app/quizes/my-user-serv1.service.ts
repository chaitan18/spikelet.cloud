import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Injectable()
export class MyUserServService {

  constructor(private http: HttpClient) { }

 //Get IP Adress using http://freegeoip.net/json/?callback
  getIpAddress() {
      return this.http
            .get('https://freegeoip.app/json/45.127.59.2')
            .map(response => response || {})
            .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse):
      Observable<any> {
        //Log error in the browser console
        console.error('observable error: ', error);

        return Observable.throw(error);
    }
}

