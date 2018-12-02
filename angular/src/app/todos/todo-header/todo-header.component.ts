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

  newTodo: string = ''

  @Output()
  add = new EventEmitter()


  addTodo() {
    let name: string = this.newTodo.trim();
    this.add.emit(name)
    this.newTodo = "";
  }
}
