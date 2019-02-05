import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
  }

  loginForm: FormGroup;
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    const user = this.loginForm.controls['username'].value;
    const pass = this.loginForm.controls['password'].value;
    this.auth.login(user, pass);
  }

  signUp() {
    const user = this.signUpForm.controls['username'].value;
    const pass = this.signUpForm.controls['password'].value;
    if (user === null || pass === null) {
      return;
    }
    this.auth.signUp(user, pass);
  }

}
