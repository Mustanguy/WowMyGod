import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HautfaitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hautfait',
  templateUrl: 'hautfait.html',
})
export class HautfaitPage {


    characters: any=[];
    constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,  private storage: Storage) {
      this.getHautFaits();
  }

    getHautFaits() {

        this.storage.get('realm').then((val) => {
            this.storage.get('character').then((val2) => {
                this.httpClient.get('https://eu.api.battle.net/wow/character/'+ val + '/'  + val2 + '?fields=achievements&locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
                    .subscribe(
                        data => {
                            console.log(data);
                            this.characters = data;
                            // this.characters = Array.of(this.characters);
                            this.resultArray = this.characters.map(function(a) {return a["_id"];});
                            this.characters['achievements']['achievementsCompleted'].forEach(function(value, key) {
                               console.log(value);
                            });

                        },
                        err => {},
                        () => console.log()
                    );
            });
        });

    }
    doClick() {
        this.navCtrl.push(MenuPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    ngOnInit() { console.log('test'); }
    getAchievement(achievementId) {
        this.httpClient.get('https://eu.api.battle.net/wow/achievement/'+ achievementId + '?&locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
            .subscribe(
                data => {
                    console.log(data);
                },
                err => {},
                () => console.log()
            );
    }

}
