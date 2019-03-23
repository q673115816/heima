import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  // loginForm = new FormGroup({
  //   username: new FormControl('鸽蛋白', [this.abs]),
  //   password: new FormControl('', [Validators.required]),
  // });

  loginForm = this.fb.group({
    username: ['鸽蛋白'],
    password: ['666'],
  })

  getUserName() {
    console.log('用户名：', this.loginForm.value);
  }

  abs(control) {
    console.log(control);
    if (/^[a-z]{3,6}$/.test(control.value)) {
      return null;
    }
    return { regerror: true };
  }

  setUserName() {
    // this.loginFrom
  }

  login() {
    console.log(this.loginForm.value, this.loginForm.valid);

  }

  ngOnInit() {
    // console.log(this.username);
    console.log(this.loginForm);
  }
}
