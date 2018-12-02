import { Component, OnInit } from "@angular/core";

import { TodosService } from '../todos.service'

import { Todo } from '../todo'
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  // providers: [TodosService]
})
export class TodoComponent implements OnInit {
  constructor(private todosServer: TodosService) {}

  todos: Todo[]

  ngOnInit() {
    this.todosServer.getTodos()
  }

  addTodo(name: string) {
    this.todosServer.addTodo(name)
  }

  removeTodo(id: number) {
    this.todosServer.removeTodo(id)
  }

  doneTodo(id: number) {
    this.todosServer.doneTodo(id)
  }
}
