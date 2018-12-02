import { Injectable } from '@angular/core';

import { Todo } from './todo'

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class TodosService {

  constructor() { }

  todos: Todo[]

  getTodos() {
    const todos: Todo[] = [
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
    this.todos = todos
    return todos
  }

  addTodo(name: string) {
    let id;
    if (this.todos.length && this.todos[this.todos.length - 1].id >= 1) {
      id = this.todos[this.todos.length - 1].id + 1;
    } else {
      id = 1;
    }

    let todo: Todo = {
      id,
      name,
      done: false
    };
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    let index = this.todos.findIndex(todo=> todo.id === id)
    this.todos.splice(index,1);
  }

  doneTodo(id: number) {
    let todo = this.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
  }
}
