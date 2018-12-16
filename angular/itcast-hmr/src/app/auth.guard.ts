import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router ) {
  }
  canActivate(): boolean {

    const token = localStorage.getItem('itcast-token');
    if (!!token) {
      return true;
    }
    console.log('路由守卫');
    this.router.navigate(['login']);
    return false;
  }
}
