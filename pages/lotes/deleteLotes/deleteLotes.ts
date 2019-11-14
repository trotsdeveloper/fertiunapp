import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LotesProvider } from '../../../providers/lotes';

@IonicPage()
@Component({
  selector: 'page-delete-lotes',
  templateUrl: 'deleteLotes.html'
})
export class DeleteLotesPage {
  private todo : FormGroup;
  public index;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public lotesService: LotesProvider, public navParams: NavParams ) {
    this.index = navParams.get("index");
  }

  delete(){
    this.lotesService.delete(this.index);
    this.navCtrl.pop();
  }
  back() {
    this.navCtrl.pop();
  }
}