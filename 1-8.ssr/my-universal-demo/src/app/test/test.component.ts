import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  msg: String = 'hello world'
  sayHello() {
    alert('hello')
  }
  jumpTolink() {
    this.router.navigate(['/link'])
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
