import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
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

  trackByTodo(index, todo) {
    return todo.id;
  }

  newTodo = "";

  addTodo() {
    if (!this.newTodo) {
      return false;
    }
    let name = this.newTodo.trim();
    let id =
      this.todos[this.todos.length - 1].id >= 1
        ? this.todos[this.todos.length - 1].id + 1
        : 1;
    let todo = {
      id,
      name,
      done: false
    };
    this.todos.push(todo);
    this.newTodo = "";
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
