import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CricketScorerApi } from '../../providers/cricket-scorer-api/cricket-scorer-api';

@Component({
  selector: 'page-season-detail',
  templateUrl: 'season-detail.html',
})
export class SeasonDetailPage {

  public season: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cricketScorerApi : CricketScorerApi) {

      this.season = this.navParams.data;

  }

  ionViewDidLoad() {
      this.cricketScorerApi.getSeasonDetails(this.season.seasonId);
  }

}
