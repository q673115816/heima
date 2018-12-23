import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL } from '../../config';

interface Employee {
  name: string;
  gender: string;
  email: string;
  phoneNumber: string;
  joinDate: number;
  id: number;
}
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  dataSet: Employee[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEmployees();
  }

  trackByDataSet(id: number, data: Employee) {
    return data.id;
  }

  getEmployees() {
    const token = localStorage.getItem('itcast-token');
    this.http.get(`${URL}/employees`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe((res: Employee[]) => {
      this.dataSet = [...res];
    });
  }

  changeEmployees() {
    const token = localStorage.getItem('itcast-token');
    this.http.get(`${URL}/employees`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe((res: Employee[]) => {
      this.dataSet = [...res];
    });
  }

  deleteEmployees(id: number) {
    this.dataSet = this.dataSet.splice(-1, 1);
    console.log(this.dataSet);

    // const token = localStorage.getItem('itcast-token');
    // this.http.delete(`${URL}/employees/${id}`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }).subscribe((res: Employee[]) => {
    //   this.dataSet = res;
    // });
  }

}
