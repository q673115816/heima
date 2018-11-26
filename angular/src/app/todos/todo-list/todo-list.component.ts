import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  todos

  @Output()
  remove = new EventEmitter()

  @Output()
  done = new EventEmitter()

  trackByTodo(index, todo) {
    return todo.id;
  }

  removeTodo(id) {
    this.remove.emit(id)
  }

  doneTodo(id) {
    this.done.emit(id)
  }
}
