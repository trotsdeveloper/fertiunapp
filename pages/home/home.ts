import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FincasPage } from '../fincas/fincas'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  fincas() {
    console.log("Fincas");
    this.navCtrl.push(FincasPage);
  }
  analisisSuelos() {
    console.log("Analisis de suelos");
  }
  elSuelo() {
    console.log("El suelo");
  }

  tiposRiesgo() {
    console.log("Tipos de riesgo");
  }

  deficienciasNutricionales() {
    console.log("Deficiencias nutricionales");
  }

  acercaNosotros() {
    console.log("Acerca de nosotros");
  }




}
