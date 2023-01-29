import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css']
})
export class TodoComponent implements OnInit {

  todosArr : any [] = [];

  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
    this.TodoService.firestorecollection.valueChanges({idField: 'id'}).subscribe( item=>{

      this.todosArr = item.sort((a: any, b: any) => {return a.isDone - b.isDone} );
    })
  }

  addTask(taskInput : HTMLInputElement){
    if(taskInput.value == ""){
      alert("Task Field is Empty!");
    }else{
      this.TodoService.addToDo(taskInput.value);
      taskInput.value = "";
    }
  }

  onStatusChange(id: string, newStatus: boolean){
    this.TodoService.updateStatus(id, newStatus);
  }

  deleteToDo(id:string){
    this.TodoService.deleteTodo(id);
  }

}
