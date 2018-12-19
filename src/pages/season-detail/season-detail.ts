import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CricketScorerApi } from '../../providers/cricket-scorer-api/cricket-scorer-api';
import { LeaguesPage } from '../leagues/leagues';
import { ClubsPage } from '../clubs/clubs';

@Component({
  selector: 'page-season-detail',
  templateUrl: 'season-detail.html',
})
export class SeasonDetailPage {

  public season: any = {};
  public leaguesTab = LeaguesPage;
  public clubsTab = ClubsPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cricketScorerApi : CricketScorerApi) {

      this.season = this.navParams.data;

  }

  ionViewDidLoad() {
     let item = this.cricketScorerApi.getSeasonDetails(this.season.seasonId);
  }

}
