import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

name=""

ngOnInit(){
  this.taskArr = JSON.parse(localStorage.getItem("tasks") || "")
}

taskArr : Task[] = []


addTask(){
  this.taskArr.push({
    id:this.taskArr.length +1,
    title:this.name,
    iscompleted:false
  })
}

complete ="complete"


completeTask(obj:Task){
  obj.iscompleted=!obj.iscompleted
  
}

deleteTask(index:number){
  this.taskArr.splice(index,1)
  
}



}
