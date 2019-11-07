import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home'; 
import { FincasProvider } from '../../providers/fincas';

@IonicPage()
@Component({
  selector: 'fincas',
  templateUrl: 'fincas.html',
})
export class FincasPage {
  fincas = [];
  constructor(public navCtrl: NavController, public fincasService: FincasProvider) {
  }
 
  ionViewDidLoad() {
    this.fincas = this.fincasService.getAll();
  }
  add() {

  }
  details(i) {

  }
  update(i) {

  }
  delete(i) {
    
  }
 
  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}