import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
// import { HelloWorldBean } from './welcome-data.service';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: string, id: any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  
  retrieveTodo(username: string, id: any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username, id , todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
  createTodo(username, todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
