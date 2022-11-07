import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = NaN
  todo: Todo
  url: string=""
  new: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.router.url;
    console.log(this.url);
    this.id= parseInt(this.url.slice(-1));
    console.log(this.id);
    
    if(this.id==0){
      this.new = "New" 
    }
    this.todo = new Todo(this.id,"",false,new Date());
    
    if(this.id!=0){
    this.todoService.retrieveTodo("ishvinder", this.id).subscribe(
      data => this.todo = data  
      );
    }
    }

    saveTodo(){
      if(this.id==0){
        // create
        this.todoService.createTodo('ishvinder', this.todo).subscribe(data =>
          {
            console.log(data);
          })
      }
      else{

      this.todoService.updateTodo('Ishvinder',this.id, this.todo).subscribe(data => {
        console.log(data);
      });
    }
      this.router.navigate(['list'])
    }
    
}
