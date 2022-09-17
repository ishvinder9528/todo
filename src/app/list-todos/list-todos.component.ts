import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  Todos = [
    new Todo(1, 'Wake up Early', false, new Date()),
    new Todo(2, 'Code code code', false, new Date()),
    new Todo(2, 'Sleep', false, new Date()),
    new Todo(4, 'And Repeat', false, new Date()),

  ];
  // todos=[
  //   { id:1,description:'Wake up Early' },
  //   { id:2,description:'Code code code' },
  //   { id:3,description:'Sleep' },
  //   { id:4,description:'And Repeat' }
  // ]
  constructor() {}

  ngOnInit(): void {}
}
