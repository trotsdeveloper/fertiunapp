import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FincasProvider } from '../../../providers/fincas';

@IonicPage()
@Component({
  selector: 'page-add-fincas',
  templateUrl: 'addFincas.html'
})
export class AddFincasPage {
  private todo : FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public fincasService: FincasProvider ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      corregimiento: ['', Validators.required],
      vereda: ['', Validators.required],
      clima: ['', Validators.required],
      altitud: [''],
      temperaturaMedia: [''],
      precipitacionMedia: [''],
    });
  }
  logForm(){
    let finca = this.todo.value;
    this.fincasService.add(finca);
    console.log(finca);
    this.navCtrl.pop();
  }
}
