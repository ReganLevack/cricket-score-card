import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CricketScorerApi {

  private baseUrl = "https://cricket-score-card-za.firebaseio.com";

  constructor(public http: Http) {
   
  }

  getSeasons(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/seasons.json`).subscribe(res => resolve(res.json()));
    })
  }

}
