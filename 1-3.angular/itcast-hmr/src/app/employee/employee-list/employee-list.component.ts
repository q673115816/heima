import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

import { REGEX_MOBILE_EXACT } from '../../config';

import { EmployeeService } from '../employee.service';

import { Employee } from '../../interface/Employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  isVisible = false;
  isOkLoading = false;

  editForm: FormGroup;
  currIndex: number;
  showModal(id: number): void {
    const token = localStorage.getItem('itcast-token');
    this.employeeService.getEmployeeById(token, id)
      .subscribe((res: Employee) => {
        this.isVisible = true;
        const { id , joinDate } = res;
        this.currIndex = id;
        this.editForm.patchValue({
          ...res,
          joinDate: new Date(joinDate)
        });
      });
  }

  handleOk(): void {
    this.isOkLoading = true;
    console.log(this.currIndex);
    this.submitForm();
  }

  handleUnloading() {
    this.isOkLoading = false;
  }

  editFinish() {
    this.isVisible = false;
    this.handleUnloading();
  }

  handleCancel(): void {
    this.isVisible = false;
    this.resetForm();
  }

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private message: NzMessageService) { }

  ngOnInit() {
    this.getEmployees();
    this.formInit();
  }

  submitForm = () => {
    const { controls, valid, value } = this.editForm;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
      }
    }
    console.log(value);

    if (!valid) {
      this.handleUnloading();
      return false;
    }

    if (!!valid) {
      const token = localStorage.getItem('itcast-token');
      this.employeeService.editEmployees(token, this.currIndex, value)
        .subscribe((res) => {
          console.log(res);
          this.editFinish();
          this.resetForm();
          this.editForm[this.currIndex] = res;
          this.message.success('修改员工成功');
        }, (err) => {
          this.message.error(`出现未知错误 ${err}`);
          this.handleUnloading();
        });
    }
  }

  resetForm(): void {
    this.editForm.reset();
    const { controls } = this.editForm;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].markAsPristine();
        controls[key].updateValueAndValidity();
      }
    }
  }

  phoneNumberValidator(control: FormControl): { [key: string]: any } | null {
    const phoneTest = REGEX_MOBILE_EXACT.test(control.value);
    return phoneTest ? null : { 'phoneTest': { value: control.value } };
  }

  formInit(employee?: Employee) {
    const option = {
      name: ['',
        [Validators.required],
        // [this.userNameAsyncValidator]
      ],
      email: ['',
        [Validators.email,
        Validators.required]],
      gender: ['',
        [Validators.required]],
      phoneNumber: ['',
        [Validators.required, this.phoneNumberValidator]
      ],
      joinDate: []
    };
    this.editForm = this.fb.group(option);
  }

  trackByemployees(id: number, data: Employee) {
    return data.id;
  }

  getEmployees() {
    const token = localStorage.getItem('itcast-token');
    this.employeeService.getEmployees(token)
      .subscribe((res: Employee[]) => {
        console.log(res);
        this.employees = [...res];
      }, (error) => {
        console.log(error);
      });
  }

  changeEmployees(id: number) {
    const token = localStorage.getItem('itcast-token');
    this.employeeService.changeEmployees(token, id)
      .subscribe((res: Employee[]) => {
        this.employees = [...res];
      });
  }

  deleteEmployees(id: number) {
    const token = localStorage.getItem('itcast-token');
    this.employeeService.deleteEmployees(token, id)
      .subscribe((res) => {
        this.employees = this.employees.filter((e) => {
          return e.id !== id;
        });
      });
  }

}
