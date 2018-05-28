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

  talentsTab: any=[];
  fureurs: any=[];
  armes: any=[];
  protections: any=[];
  selected: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public httpClient: HttpClient) {
    this.getTalents()
  }

    doClick() {
        this.navCtrl.push(MenuPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    getTalents() {
        this.selected = 'fureur';
        this.storage.get('realm').then((val) => {
            this.storage.get('nickname').then((val2) => {
                this.httpClient.get('https://eu.api.battle.net/wow/character/'+ val + '/'  + val2 + '?fields=talents&locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
                    .subscribe(
                        data => {
                            this.talentsTab = data;
                            this.talentsTab = Array.of(this.talentsTab);
                            this.talentsTab.forEach((value) => {
                                this.fureurs = value.talents[0];
                                this.fureurs = Array.of(this.fureurs);
                                this.armes = value.talents[1];
                                this.armes = Array.of(this.armes);
                                this.protections = value.talents[2];
                                this.protections = Array.of(this.protections);
                                console.log(this.fureurs);
                            });

                        },
                        err => {},
                        () => console.log()
                    );
            });
        });

    }

    selectArmes() {
      this.selected = 'armes'
    }

    selectProtection() {
        this.selected = 'protection'
    }

    selectFureur() {
        this.selected = 'fureur'
    }
}
