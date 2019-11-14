import { Injectable} from '@angular/core';
import { Lote } from '../dao_classes/lote';

@Injectable()
export class LotesProvider {
    lotes = [];
    constructor() {

    }

    getAll() {
      return this.lotes;
    }

    get(index) {
      return this.lotes[index];
    }

    add(lote){
      this.lotes.push(lote);
    }

    update(index, lotes) {
      this.lotes[index] = lote;
    }

    delete(index) {
      this.lotes.splice(index, 1);
    }

}