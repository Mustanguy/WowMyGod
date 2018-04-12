import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ItemPage } from '../pages/item/item';
import { HttpClientModule } from '@angular/common/http';
import { MenuPage } from "../pages/menu/menu";
import { IonicStorageModule } from '@ionic/storage';
import {ChoixPage} from "../pages/choix/choix";
import {HautfaitPage} from "../pages/hautfait/hautfait";
import {TalentsPage} from "../pages/talents/talents";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    ItemPage,
    MenuPage,
    ChoixPage,
    HautfaitPage,
    TalentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    ItemPage,
    MenuPage,
    ChoixPage,
    HautfaitPage,
    TalentsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
