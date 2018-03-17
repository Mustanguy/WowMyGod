import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DashboardPage} from "../dashboard/dashboard";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    credentials = {};
    data: any;

    constructor(public navCtrl: NavController) {
    }

    logForm() {
        this.navCtrl.push(DashboardPage, {'data': this.credentials});
    }


}
