import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config';
import { Employee } from '../interface/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeById(token: string, id: number) {
    return this.http.get(`${URL}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getEmployees(token: string) {
    return this.http.get(`${URL}/employees`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  addEmployees(token: string, employee: Employee) {
    return this.http.post(`${URL}/employees`, employee, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  changeEmployees(token: string, id: number) {
    return this.http.get(`${URL}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  deleteEmployees(token: string, id: number) {
    return this.http.delete(`${URL}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  editEmployees(token: string, id: number, employee: Employee) {
    return this.http.patch(`${URL}/employees/${id}`, employee, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
