import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { LoginService } from './login.service';

import { Router } from '@angular/router';


interface Token {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    const validateForm = this.validateForm;
    const { controls } = validateForm;
    for (const i in controls) {
      if (controls.hasOwnProperty(i)) {
        controls[ i ].markAsDirty();
        controls[ i ].updateValueAndValidity();
      }
    }
  }

  login(): void {
    const validateForm = this.validateForm;
    const { controls, valid, value } = validateForm;
    const loginForm = {
      username: value.userName,
      password: value.password
    };
    console.log(controls, valid, value);
    if (valid) {
      console.log('登录中');
      this.loginService.login(loginForm).subscribe((res: Token) => {
        // console.log(res.token);
        localStorage.setItem('itcast-token', res.token);
        this.router.navigate(['home']);
      });
    }
  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ 'zce', [ Validators.required, Validators.maxLength(6), Validators.minLength(3) ] ],
      password: [ 'wanglei', [ Validators.required] ],
      remember: [ true ]
    });
  }
}
