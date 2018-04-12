import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalentsPage } from './talents';

@NgModule({
  declarations: [
    TalentsPage,
  ],
  imports: [
    IonicPageModule.forChild(TalentsPage),
  ],
})
export class TalentsPageModule {}
