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

  //   name:string;
  // age:number;
  // email: string;
  // imagePath:string;
  // fname:string;
  // flag:boolean;
  // vehicles:string[];
  // selectedVehicle:string;
  // myStyle:{};
  // myClass:string;
  
  constructor( private calc : CalculatorService){
    //this.name="darunika";
    // this.age=20;
    // this.email="darunika2004@gmail.com";
    // this.imagePath="./assets/logo.png";
    // this.fname="";
    // this.flag=true;
    // this.vehicles=["Two","three","four"];
    // this.selectedVehicle="";
    // this.myStyle={'width':'40%','border':'2px solid blue','border-radius':'50px'};
    // this.myClass="MyClass1";
    this.sum=calc.getaddition(10,20);
  }


  // changeName(){
  //   this.name="Daru";
  // }

  // changeAge(){
  //   this.age=21;
  // }

  // changeEmail(){
  //   this.email="darunikababu2004@gmail.com"
  // }
  // changeImage(){
  //   this.imagePath="./assets/logo2.png"
  // }
  //  changeFlag(){
  //   this.flag=!this.flag;
  //   }
    
  //   setSelectedItem(v:string){
  //    this.selectedVehicle=v; 
  //   }

  //   changeStyle(){
  //     this.myStyle={'width':'40%','border':'2px solid gold','border-radius':'25px'};
  //   }
  }

