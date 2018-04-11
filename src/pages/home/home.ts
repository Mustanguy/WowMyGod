import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DashboardPage} from "../dashboard/dashboard";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    credentials = {};
    data: any;

    constructor(public navCtrl: NavController, private storage: Storage) {
    }

    logForm() {
        this.storage.set('realm', this.credentials['realm']);
        this.storage.set('nickname', this.credentials['nickname']);

        this.navCtrl.push(DashboardPage, {'data': this.credentials});
    }

}
