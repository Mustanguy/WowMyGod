import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {HomePage} from "../home/home";
import {ItemPage} from "../item/item";
import { PopoverController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

    credentials = {};
    characters: any=[];
    allClass: any=[];
    img: any;
    classe: any;
    classId: {};
    item: any;
    selectedData:any = {title:"None Selected",id:0};

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public popoverCtrl: PopoverController) {
    this.credentials = navParams.get('data');
    this.getUsers();
  }

  getUsers() {

        this.httpClient.get('https://eu.api.battle.net/wow/character/'+ this.credentials['realm'] + '/'  + this.credentials['nickname'] + '?fields=items+titles+talents+stats&locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
            .subscribe(
                data => {
                    this.characters = data;
                    this.characters = Array.of(this.characters);
                    let imgReplace = this.img;
                    let classId = this.classId;
                    this.img = this.characters.forEach(function(value, key) {
                        imgReplace = value.thumbnail.replace("avatar.jpg", "main.jpg");
                        classId = value.class;
                    });
                    this.img = imgReplace;
                    this.classId = classId;
                    this.getClass(classId);
                },
                err => {alert('Impossible de trouver le personnage'); this.navCtrl.push(HomePage)},
                () => console.log(this.characters)
            );
  }

  getClass(id) {
      this.httpClient.get('https://eu.api.battle.net/wow/data/character/classes?locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
          .subscribe(
              data => {
                  this.allClass = data;
                  this.allClass = Array.of(this.allClass);
                  let class2 = this.classe;
                  this.classe = this.allClass[0].classes.forEach(function(value, key) {
                      if (id == value.id) {
                          class2 = value.name;
                      }
                  });

                  this.classe = class2;
              },
              err => console.error(err),
              () => console.log(this.classe)
          );
  }

  presentPopover(ev, id) {

      let popover = this.popoverCtrl.create(ItemPage, {id});

      popover.present({
          ev: ev
      });

      popover.onDidDismiss(data => {
            console.log(data);
            if(data!=null){
                this.selectedData = data
            }
        })
    }

}
