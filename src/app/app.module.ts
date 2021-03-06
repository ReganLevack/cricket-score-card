import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdminPage } from '../pages/admin/admin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminDetailPage } from '../pages/admin-detail/admin-detail';
import { LeaguesPage } from '../pages/leagues/leagues';
import { ClubsPage } from '../pages/clubs/clubs';
import { LandingPage } from '../pages/landing/landing';
import { CricketScorerApi } from '../providers/cricket-scorer-api/cricket-scorer-api';
import { SecurityApi } from '../providers/security-api/security-api';
import { SeasonsPage } from '../pages/seasons/seasons';
import { HttpModule } from '@angular/http';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { SeasonDetailPage } from '../pages/season-detail/season-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    AdminDetailPage,
    LeaguesPage,
    ClubsPage,
    LandingPage,
    SeasonsPage,
    RegisterPage,
    LoginPage,
    SeasonDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    AdminDetailPage,
    LeaguesPage,
    ClubsPage,
    LandingPage,
    SeasonsPage,
    RegisterPage,
    LoginPage,
    SeasonDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CricketScorerApi,
    SecurityApi
  ]
})
export class AppModule {}
