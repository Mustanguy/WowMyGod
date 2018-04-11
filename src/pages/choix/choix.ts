import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import { Storage } from '@ionic/storage';
import {DashboardPage} from "../dashboard/dashboard";

/**
 * Generated class for the ChoixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix',
  templateUrl: 'choix.html',
})
export class ChoixPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

    doClick() {
        this.navCtrl.push(MenuPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    goDashboard() {
        this.storage.get('realm').then((val) => {
            this.storage.get('nickname').then((val2) => {
                this.navCtrl.push(DashboardPage, {'data': {'realm': val, 'nickname': val2}});
            });
        });
    }

}
