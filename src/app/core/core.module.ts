import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './auth/authentication.module';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule
  ], exports: [
    NavbarComponent
  ],
  declarations: [
    LogoComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
