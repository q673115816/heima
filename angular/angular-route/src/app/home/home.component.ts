import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  list = [
    '法拉利',
    '兰博基尼',
    '五菱宏光'
  ]
  ngOnInit() {
  }

}
