import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  msg = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.loginUser(email, password).subscribe((token) => {
      console.log('Login Success:', token);
    }, (msg: string) => {
      this.msg = msg;
      console.log(this.msg);
    });
  }

}
