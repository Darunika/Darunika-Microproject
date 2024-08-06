import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject1';
  sum:number;
  constructor(private calc:CalculatorService){
    this.sum=calc.getaddition(10,20);
  }
}
