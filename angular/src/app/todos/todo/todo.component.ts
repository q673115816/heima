import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  todos = [
    {
      id: 1,
      name: "吃饭",
      done: false
    },
    {
      id: 2,
      name: "睡觉",
      done: false
    },
    {
      id: 3,
      name: "打豆豆",
      done: true
    }
  ];


  addTodo(name) {
    let id;
    if (this.todos.length && this.todos[this.todos.length - 1].id >= 1) {
      id = this.todos[this.todos.length - 1].id + 1;
    } else {
      id = 1;
    }

    let todo = {
      id,
      name,
      done: false
    };
    this.todos.push(todo);
  }

  removeTodo(id) {
    let newTodos = this.todos.filter(todo => todo.id !== id);
    this.todos = newTodos;
  }

  doneTodo(id) {
    let todo = this.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
  }
}
