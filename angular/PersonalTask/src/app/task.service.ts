import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url:string;
  task:Task;
  taskArr:Task[];
  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/tasks";
    this.task=new Task();
    this.taskArr=[];
   }

   insertTask(task:Task){
    this.http.post<Task>(this.url,task).subscribe();
    return "Task Details Added";
   }

   updateTask(task:Task){
    this.http.put<Task>(this.url+"/"+task.id,task).subscribe();
    return "Task Details Updated";
   }

   deleteTask(taskId:number){
    this.http.delete<Task>(this.url+"/"+taskId).subscribe();
    return "Task Details Deleted";
  }

  findTask(taskId:number){
    this.http.get<Task>(this.url+"/"+taskId).subscribe(data => this.task=data);
    return this.task;

  }
  findAllTask(){
    this.http.get<Task[]>(this.url).subscribe(data => this.taskArr=data);
    return this.taskArr;

  }
}

