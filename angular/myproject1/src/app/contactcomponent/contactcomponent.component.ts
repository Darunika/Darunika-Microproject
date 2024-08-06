import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-contactcomponent',
  templateUrl: './contactcomponent.component.html',
  styleUrl: './contactcomponent.component.css'
})
export class ContactcomponentComponent {
  sum:number;
  sub:number;
  constructor(private calc:CalculatorService){
    this.sum=calc.getaddition(10,20);
    this.sub=calc.getsubraction(50,20);

  }
}
