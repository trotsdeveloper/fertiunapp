import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FincasProvider } from '../../../providers/fincas';

@IonicPage()
@Component({
  selector: 'page-details-fincas',
  templateUrl: 'detailsFincas.html'
})
export class DetailsFincasPage {
  private todo : FormGroup;
  public index;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public fincasService: FincasProvider, public navParams: NavParams ) {

    let finca = this.fincasService.get(this.index);
    this.index = navParams.get("index");
    this.todo = this.formBuilder.group({      
      nombre: [finca.nombre, Validators.required],
      departamento: [finca.departamento, Validators.required],
      municipio: [finca.municipio, Validators.required],
      corregimiento: [finca.corregimiento, Validators.required],
      vereda: [finca.vereda, Validators.required],
      clima: [finca.clima, Validators.required],
      altitud: [finca.altitud],
      temperaturaMedia: [finca.temperaturaMedia],
      precipitacionMedia: [finca.precipitacionMedia],
    });
  }
}