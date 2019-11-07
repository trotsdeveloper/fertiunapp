import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-add-fincas',
  templateUrl: 'addFincas.html'
})
export class AddFincasPage {
  private todo : FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
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
    console.log(this.todo.value)
  }


}
