import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the TalentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talents',
  templateUrl: 'talents.html',
})
export class TalentsPage {

  talents: any=[];
  talentsTab: any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public httpClient: HttpClient) {
    this.getTalents()
  }

    doClick() {
        this.navCtrl.push(MenuPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    getTalents() {

        this.storage.get('realm').then((val) => {
            this.storage.get('nickname').then((val2) => {
                this.httpClient.get('https://eu.api.battle.net/wow/character/'+ val + '/'  + val2 + '?fields=talents&locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
                    .subscribe(
                        data => {
                            this.talentsTab = data;
                            this.talentsTab = Array.of(this.talentsTab);
                            this.talentsTab.forEach((value) => {
                                this.talents = value.talents[0].talents;
                                console.log(this.talents);
                            });

                        },
                        err => {},
                        () => console.log()
                    );
            });
        });

    }
}
