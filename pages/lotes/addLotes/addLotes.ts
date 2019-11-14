import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LotesProvider } from '../../../providers/lotes';

@IonicPage()
@Component({
  selector: 'page-add-lotes',
  templateUrl: 'addLotes.html'
})
export class AddLotesPage {
  private todo : FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public lotesService: LotesProvider ) {
    this.todo = this.formBuilder.group({
      cultivo: ['', Validators.required],
      variedad: [''],
      edad: ['', Validators.required],
      distanciaEntrePlantas: [''],
      distanciaEntreSurcos: ['']
    });
  }
  logForm(){
    let lote = this.todo.value;
    this.lotesService.add(lote);
    console.log(lote);
    this.navCtrl.pop();
  }
}