import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private active: ActivatedRoute) { }
  text = '';


  list = [
    '法拉利',
    '兰博基尼',
    '五菱宏光'
  ]

  ngOnInit() {
    this.active.paramMap.subscribe((res) => {
      const id = res.get('id');
      console.log(id);
      this.text = this.list[id];
    });
  }

}
