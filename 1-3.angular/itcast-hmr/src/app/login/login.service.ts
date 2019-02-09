import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { URL } from '../config';

interface LoginForm {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(loginForm: LoginForm) {
    return this.http.post(`${URL}/tokens`, loginForm);
  }
}
