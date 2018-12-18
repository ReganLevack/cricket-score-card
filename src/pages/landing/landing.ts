import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CricketScorerApi } from '../../providers/cricket-scorer-api/cricket-scorer-api';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  public topLeagues: any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cricketScorerApi: CricketScorerApi,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log("hello");
    let loader = this.loadingController.create({
      content: 'Getting seasons...'
     // spinner: 'dots'
   });

   loader.present().then(() => { 
   this.cricketScorerApi.getSeasons().then(data => {
     this.topLeagues = data;
     loader.dismiss();
   });
 });
}

}
