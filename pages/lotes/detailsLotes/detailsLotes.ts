import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LotesProvider } from '../../../providers/lotes';

@IonicPage()
@Component({
  selector: 'page-details-lotes',
  templateUrl: 'detailsLotes.html'
})
export class DetailsLotesPage {
  private todo : FormGroup;
  public index;
  public lote;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public lotesService: LotesProvider, public navParams: NavParams ) {
    this.index = navParams.get("index");
    console.log(this.index);
    this.lote = this.lotesService.get(this.index);
    this.todo = this.formBuilder.group({      
      cultivo: [this.lote.cultivo, Validators.required],
      variedad: [this.lote.variedad],
      edad: [this.lote.edad, Validators.required],
      distanciaEntrePlantas: [this.lote.distanciaEntrePlantas],
      distanciaEntreSurcos: [this.lote.distanciaEntreSurcos]
    });
  }
}