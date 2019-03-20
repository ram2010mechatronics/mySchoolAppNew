import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../core/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
  invalidLogin = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    let body = new HttpParams();
    body = body.set('grant_type' , 'password');
    body = body.set('username', this.loginForm.controls.username.value);
    body = body.set('password', this.loginForm.controls.password.value);


    // const loginPayload = {
    //   grant_type : 'password',
    //   username: this.loginForm.controls.username.value,
    //   password: this.loginForm.controls.password.value
    // };

    this.apiService.login(body).subscribe(data => {
      // tslint:disable-next-line:no-debugger
      debugger;
      if (data.status === 200) {
        window.localStorage.setItem('token', data.result.access_token);
        window.localStorage.setItem('refreshtoken', data.result.refresh_token);
        this.router.navigate(['home']);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }


}
