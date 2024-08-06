import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS';
  employee : Employee;//model class
  result:string;
  employeeArr:Employee[];
  flag:boolean;
  

  constructor(private service:EmployeeService){//injecting  own service 
    this.employee=new Employee();//object
    this.result=" ";
    this.employeeArr=[];
    this.flag=false;
   
  }
//assign the value to model obj 
  insertEmployee(data:any){
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;

    this.result=this.service.insertEmployee(this.employee);

    // this.service.insertEmployee(this.employee);
    //alert(data.empId+" "+data.empName+" "+data.empSalary);

  }
  updateEmployee(data:any){
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;

    this.result=this.service.updateEmployee(this.employee);
}
  deleteEmployee(data:any){
  
  this.result=this.service.deleteEmployee(data.empId);
}
findEmployee(data:any){
  this.employee=this.service.findEmployee(data.empId);
  this.result=this.employee.id+" "+this.employee.empName+" "+this.employee.empSalary;
}
findAllEmployee(){
  this.employeeArr=this.service.findAllEmployee();
  this.flag=true;
}
    
}
