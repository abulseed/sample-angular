import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './ui/login-form/login-form.component';
import { AlertComponent } from './ui/alert/alert.component';
import { AuthInterceptor } from './authentication.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  declarations: [
    LoginFormComponent,
    AlertComponent
  ]
})
export class AuthenticationModule { }
