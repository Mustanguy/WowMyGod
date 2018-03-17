import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.getItem();
  }

  getItem() {
      this.httpClient.get('https://eu.api.battle.net/wow/item/'+ this.navParams.data.id +'?locale=fr_FR&apikey=e4ynx3aazz7gx3vc4a835x9h9bx2xvnn')
          .subscribe(
              data => {
                  this.items = data;
                  this.items = Array.of(this.items);
              },
              err => console.error(err),
              () => console.log()
          );
  }


}
