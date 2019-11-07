import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'fincas',
  templateUrl: 'fincas.html',
})
export class FincasPage {
 
  constructor(public navCtrl: NavController){
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }
 
  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}