import { Injectable } from '@angular/core';
import { ICalculator } from './icalculation-service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class CalculationServiceService implements ICalculator {




  add(t1: number, t2: number): number {
    return t1 + t2;
  }
  subtract(t1: number, t2: number): number {
    return t1 - t2;
  }
  divide(t1: number, t2: number): number {
    let resultat: number;
    try {
      resultat = t1 / t2;
    } catch (error) {
      console.log('Error: ', error);
      throw new Error(('Something Went Wrong--'));

    }
    return resultat;

  }
  multiply(t1: number, t2: number): number {
   return t1 * t2;
  }




  constructor() { }

}
