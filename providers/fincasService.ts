import { Injectable} from '@angular/core';
import { Finca } from '../dao_classes/finca';

@Injectable()
export class FincasProvider {
    fincas = [];
    constructor() {

    }

    getFincas(){
      return fincas;
    }

    addFincas(finca){
      this.fincas.push(finca);
    }

}