import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './ui/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginFormComponent
  ]
})
export class AuthenticationModule { }
