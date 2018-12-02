import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  remove = new EventEmitter();

  @Output()
  done = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  trackByTodo(index: number, todo: Todo) {
    return todo.id;
  }

  removeTodo(id: number) {
    this.remove.emit(id);
  }

  doneTodo(id: number) {
    this.done.emit(id);
  }
}
