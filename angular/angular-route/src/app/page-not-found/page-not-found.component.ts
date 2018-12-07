import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }
  time = 5;
  inter;

  ngOnInit() {
    this.inter = setInterval(() => {
      this.time--;
      console.log(this.time);
      if (this.time <= 0) {
        clearInterval(this.inter);
        this.inter = null;
        this.router.navigate(['/home']);
      }
    }, 1000);

  }

}
