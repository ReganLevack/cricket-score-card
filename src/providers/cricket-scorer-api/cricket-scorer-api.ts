import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CricketScorerApi {

  private baseUrl = "https://cricket-score-card-za.firebaseio.com";
  private currentSeason: any = {};

  constructor(public http: Http) {
   
  }

  getSeasons(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/seasons.json`).subscribe(res => resolve(res.json()));
    })
  }

  getSeasonDetails(seasonId){
    return this.http.get(`${this.baseUrl}/seasondetail/${seasonId}.json`)
    .map(response => { this.currentSeason = response.json();
     return this.currentSeason;
   });
  }

  
  getCurrentSeason(){
    return this.currentSeason;
  }
}
