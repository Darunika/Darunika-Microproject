import { Component } from '@angular/core';
import { Task } from './model/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PersonalTask';
  task : Task;//model class
  result:string;
  taskArr:Task[];
  flag:boolean;

  constructor(private service:TaskService){//injecting  own service 
    this.task=new Task();//object
    this.result=" ";
    this.taskArr=[];
    this.flag=false;
  }

  insertTask(data:any){
    this.task.id=data.taskId;
    this.task.taskName=data.taskName;
    this.task.taskStatus=data.taskStatus;
    this.result=this.service.insertTask(this.task);
  }
  updateTask(data:any){
    this.task.id=data.taskId;
    this.task.taskName=data.taskName;
    this.task.taskStatus=data.taskStatus;

    this.result=this.service.updateTask(this.task);
}
  deleteTask(data:any){
  
  this.result=this.service.deleteTask(data.taskId);
}

  findTask(data:any){
  this.task=this.service.findTask(data.taskId);
  this.result=this.task.id+" "+this.task.taskName+" "+this.task.taskStatus;
}
findAllTask(){
  this.taskArr=this.service.findAllTask();
  this.flag=true;
}
}

