import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { HomePage } from '../../home/home'; 
import { FincasProvider } from '../../../providers/fincas';
import { AddFincasPage} from '../addFincas/addFincas';
import { DetailsFincasPage } from '../detailsFincas/detailsFincas';
import { UpdateFincasPage } from '../updateFincas/updateFincas';
import { DeleteFincasPage } from '../deleteFincas/deleteFincas';

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
    this.navCtrl.push(AddFincasPage);

  }
  details(i) {
    this.navCtrl.push(DetailsFincasPage, {
      index: i
    });
  }
  update(i) {
    this.navCtrl.push(UpdateFincasPage, {
      index: i
    });

  }
  delete(i) {
    this.fincas = this.fincasService.getAll();
    this.navCtrl.push(DeleteFincasPage, {
      index: i,
      name: this.fincas[i].nombre,
    });
    
  }
 
  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}