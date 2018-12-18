import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CricketScorerApi } from '../../providers/cricket-scorer-api/cricket-scorer-api';
import { SeasonDetailPage } from '../season-detail/season-detail';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  public topSeasons: any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cricketScorerApi: CricketScorerApi,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    
    let loader = this.loadingController.create({
      content: 'Getting seasons...'
     // spinner: 'dots'
   });

   loader.present().then(() => { 
   this.cricketScorerApi.getSeasons().then(data => {
     this.topSeasons = data;
     loader.dismiss();
   });
 });
}

goToSeasonDetails($event, season){
  console.log("season detail page");
  this.navCtrl.push(SeasonDetailPage, season);
}

}
