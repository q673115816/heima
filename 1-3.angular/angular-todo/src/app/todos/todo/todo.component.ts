import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';

import { Todo } from '../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // providers: [TodosService]
})
export class TodoComponent implements OnInit {
  constructor(private todosServer: TodosService) { }

  todos: Todo[];
  ngOnInit() {
    this.todosServer.getTodos()
                    .subscribe((res: Todo[]) => {
      this.todos = [...res];
    });
  }

  addTodo(name: string) {
    this.todosServer.addTodo(name)
                    .subscribe((todo: Todo) => {
      console.log(todo);
      this.todos.push(todo);
    })
  }

  removeTodo(id: number) {
    this.todosServer.removeTodo(id)
                    .subscribe((res) => {
      console.log(res);
    })
  }

  doneTodo(id: number) {
    const curTodo = this.todos.find((todo)=>todo.id === id)
    const done = curTodo.done
    this.todosServer.doneTodo(id,done)
                    .subscribe((res) => {
      console.log(res);
    })
  }
}
