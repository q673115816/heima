import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newTodo = ''

  @Output()
  add = new EventEmitter()


  addTodo() {
    if (!this.newTodo) {
      return false;
    }
    let name = this.newTodo.trim();
    this.add.emit(name)
    this.newTodo = "";
  }
}
