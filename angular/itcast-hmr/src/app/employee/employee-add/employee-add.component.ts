import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

import { REGEX_MOBILE_EXACT } from '../../config';
import { EmployeeService } from '../employee.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  validateForm: FormGroup;

  submitForm = ($event, value) => {
    $event.preventDefault();
    const { controls, valid } = this.validateForm;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
      }
    }
    console.log(value);
    if (!!valid) {
      const token = localStorage.getItem('itcast-token');
      this.employeeService.addEmployees(token, value)
        .subscribe((res) => {
          console.log(res);
        });
      this.message.success('添加员工成功', { nzDuration: 800 });
      setTimeout(() => {
        this.router.navigate(['home', 'list']);
      }, 1000);
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    const { controls } = this.validateForm;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        controls[key].markAsPristine();
        controls[key].updateValueAndValidity();
      }
    }
  }
  // 异步获取验证，返回promise或构建的泛型
  // userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
  //   setTimeout(() => {
  //     if (control.value === 'JasonWood') {
  //       observer.next({ error: true, duplicated: true });
  //     } else {
  //       observer.next(null);
  //     }
  //     observer.complete();
  //   }, 1000);
  // })

  phoneNumberValidator(control: FormControl): { [key: string]: any } | null {
    const phoneTest = REGEX_MOBILE_EXACT.test(control.value);
    return phoneTest ? null : { 'phoneTest': { value: control.value } };
  }

  formInit() {
    this.validateForm = this.fb.group({
      name: ['123',
        [Validators.required],
        // [this.userNameAsyncValidator]
      ],
      email: ['673115816@qq.com',
        [Validators.email,
        Validators.required]],
      gender: ['0',
        [Validators.required]],
      phoneNumber: ['18357790618',
        [Validators.required, this.phoneNumberValidator]
      ],
      joinDate: [new Date]
    });
  }

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private message: NzMessageService,
    private router: Router
  ) { }


  ngOnInit() {
    this.formInit();
  }

}
