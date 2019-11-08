import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FincasProvider } from '../../../providers/fincas';

@IonicPage()
@Component({
  selector: 'page-delete-fincas',
  templateUrl: 'deleteFincas.html'
})
export class DeleteFincasPage {
  private todo : FormGroup;
  public index;
  public name;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public fincasService: FincasProvider, public navParams: NavParams ) {
    this.index = navParams.get("index");
    this.name = navParams.get("name");
  }

  delete(){
    this.fincasService.delete(this.index);
    this.navCtrl.pop();
  }
  back() {
    this.navCtrl.pop();
  }
}