import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  todos: Todo[];
  url = 'http://localhost:3000/todos';
  getTodos() {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(name: string) {
    // let id;
    // if (this.todos.length && this.todos[this.todos.length - 1].id >= 1) {
    //   id = this.todos[this.todos.length - 1].id + 1;
    // } else {
    //   id = 1;
    // }

    // let todo: Todo = {
    //   id,
    //   name,
    //   done: false
    // };
    // this.todos.push(todo);
    return this.http.post(this.url, {
      name: name,
      done: false
    });
  }

  removeTodo(id: number) {
    // let index = this.todos.findIndex(todo=> todo.id === id)
    // this.todos.splice(index,1);
    return this.http.delete(`${this.url}/${id}`);
  }

  doneTodo(id: number,done: boolean) {
    // let todo = this.todos.find(todo => todo.id === id);
    // todo.done = !todo.done;
    return this.http.patch(`${this.url}/${id}`, { done: done });
  }
}
