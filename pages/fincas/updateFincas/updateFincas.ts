import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FincasProvider } from '../../../providers/fincas';

@IonicPage()
@Component({
  selector: 'page-update-fincas',
  templateUrl: 'updateFincas.html'
})
export class UpdateFincasPage {
  private todo : FormGroup;
  public index;
  public finca;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public fincasService: FincasProvider, public navParams: NavParams ) {
    this.index = navParams.get("index");
    console.log(this.index);
    this.finca = this.fincasService.get(this.index);
    this.todo = this.formBuilder.group({      
      nombre: [this.finca.nombre, Validators.required],
      departamento: [this.finca.departamento, Validators.required],
      municipio: [this.finca.municipio, Validators.required],
      corregimiento: [this.finca.corregimiento, Validators.required],
      vereda: [this.finca.vereda, Validators.required],
      clima: [this.finca.clima, Validators.required],
      altitud: [this.finca.altitud],
      temperaturaMedia: [this.finca.temperaturaMedia],
      precipitacionMedia: [this.finca.precipitacionMedia],
    });
  }

  logForm(){
    let finca = this.todo.value;
    this.fincasService.update(this.index, finca);
    console.log(finca);
    this.navCtrl.pop();
  }
}