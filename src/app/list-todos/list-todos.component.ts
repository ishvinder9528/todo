import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  Todos: Todo[] = [];
  message: string = '';
  // = [
  //   new Todo(1, 'Wake up Early', false, new Date()),
  //   new Todo(2, 'Code code code', false, new Date()),
  //   new Todo(2, 'Sleep', false, new Date()),
  //   new Todo(4, 'And Repeat', false, new Date()),

  // ];
  // todos=[
  //   { id:1,description:'Wake up Early' },
  //   { id:2,description:'Code code code' },
  //   { id:3,description:'Sleep' },
  //   { id:4,description:'And Repeat' }
  // ]

  constructor(private todoService: TodoDataService,
    private router: Router) {}

  deleteTodo(id: number) {
    console.log(`Todo Deleted ${id}`);
    this.todoService.deleteTodo("ishvinder",id).subscribe(
      response =>{
        console.log(response);
        this.message = `ID-${id} Successfully Deleted`;
        this.refreshTodo(); 
      }
    );
  }

  updateTodo(id:number){
    console.log(`Todo Updated ${id}`);
    this.router.navigate([ `/todos/${id}`]);
  }

  refreshTodo(){
    this.todoService.retriveAllTodos('ishvinder').subscribe((response) => {
      console.log(response);
      this.Todos = response;
    });
  }

  ngOnInit(): void {
    this.refreshTodo();
  }
}
