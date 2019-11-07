import { Injectable} from '@angular/core';
import { Finca } from '../dao_classes/finca';

@Injectable()
export class FincasProvider {
    fincas = [];
    constructor() {

    }

    getAll() {
      return this.fincas;
    }

    get(index) {
      return this.fincas[index];
    }

    add(finca){
      this.fincas.push(finca);
    }

    update(index, finca) {
      this.fincas[index] = finca;
    }

    delete(index) {
      this.fincas.splice(index, 1);
    }

}