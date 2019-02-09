import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {


  newTodo = '';

  @Output()
  add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  addTodo() {
    const name: string = this.newTodo.trim();
    this.add.emit(name);
    this.newTodo = '';
  }
}
