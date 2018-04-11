import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {DashboardPage} from "../dashboard/dashboard";
import {ChoixPage} from "../choix/choix";
import {HautfaitPage} from "../hautfait/hautfait";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

    realm: any;
    nickname: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  doClick() {
      this.navCtrl.push(MenuPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

    goChoice() {
        this.navCtrl.push(ChoixPage);
    }

  goDashboard() {
      this.storage.get('realm').then((val) => {
          this.storage.get('nickname').then((val2) => {
              this.navCtrl.push(DashboardPage, {'data': {'realm': val, 'nickname': val2}});
          });
      });
  }

    goHautFait() {
        this.navCtrl.push(HautfaitPage);
    }

}
