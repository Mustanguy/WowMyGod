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
        this.isLogged()
    }

    logForm() {
        this.storage.set('realm', this.credentials['realm']);
        this.storage.set('nickname', this.credentials['nickname']);

        this.navCtrl.push(DashboardPage, {'data': this.credentials});
    }

    isLogged() {
        this.storage.get('realm').then((val) => {
            this.storage.get('nickname').then((val2) => {
                console.log(val);
                if(val != null) {
                    this.navCtrl.push(DashboardPage, {'data': {'realm': val, 'nickname': val2}});
                }
            });
        });
    }

}
