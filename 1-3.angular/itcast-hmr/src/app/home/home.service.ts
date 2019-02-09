import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL } from '../config';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  logout (token: string) {
    console.log(token);
    return this.http.delete(`${URL}/tokens`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
