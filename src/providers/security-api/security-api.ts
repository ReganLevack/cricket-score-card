import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SecurityApi {

  private baseUrl = "https://cricket-score-card-za.firebaseio.com";

  constructor(public http: Http) {
    console.log('Hello Security Provider');
  }

  login(credentials: string): Promise<any> {
    return this.http.get(`${this.baseUrl}/users.json`)
      .toPromise()
      .then(this.extractDataFromBody)
      .catch(this.handleError);
  }

  private extractDataFromBody(response: Response) {
    //Convert the response to JSON format
    let body = response.json();
    alert(body);
    //Return the data (or nothing)
    return body || {};
  }

  private handleError(response: Response | any) {
    console.error('Entering handleError()');
    console.dir(response);
    return Promise.reject(response.message || response);
  }

}
