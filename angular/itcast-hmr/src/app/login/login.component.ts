import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

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
    console.log(111);
    console.log(controls, valid, value);
    if (valid) {
      console.log('登录中');
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required, Validators.maxLength(6), Validators.minLength(3) ] ],
      password: [ null, [ Validators.required, Validators.maxLength(6), Validators.minLength(3) ] ],
      remember: [ true ]
    });
  }
}
