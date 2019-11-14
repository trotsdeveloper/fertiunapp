import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { HomePage } from '../../home/home'; 
import { LotesProvider } from '../../../providers/lotes';
import { AddLotesPage} from '../addLotes/addLotes';
import { DetailsLotesPage } from '../detailsLotes/detailsLotes';
import { UpdateLotesPage } from '../updateLotes/updateLotes';
import { DeleteLotesPage } from '../deleteLotes/deleteLotes';

@IonicPage()
@Component({
  selector: 'lotes',
  templateUrl: 'lotes.html',
  styleUrls: ['./lotes.scss']
})
export class LotesPage {
  lotes = [];
  constructor(public navCtrl: NavController, public lotesService: LotesProvider) {
  }
 
  ionViewDidLoad() {
    this.lotes = this.lotesService.getAll();
  }
  add() {
    this.navCtrl.push(AddLotesPage);

  }
  details(i) {
    this.navCtrl.push(DetailsLotesPage, {
      index: i
    });
  }
  update(i) {
    this.navCtrl.push(UpdateLotesPage, {
      index: i
    });

  }
  delete(i) {
    this.lotes = this.lotesService.getAll();
    this.navCtrl.push(DeleteLotesPage, {
      index: i
    });
    
  }
 
  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}