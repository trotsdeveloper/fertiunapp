import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Home</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      Hello World
    </ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
}
