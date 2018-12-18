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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    AdminDetailPage,
    LeaguesPage,
    ClubsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    AdminDetailPage,
    LeaguesPage,
    ClubsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
