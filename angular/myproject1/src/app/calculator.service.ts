import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  getaddition(a:number ,b:number){
    return a+b;
  }
  getsubraction(a:number ,b:number){
    return a-b;
  }
}
