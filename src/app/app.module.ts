import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { StoreModule } from '@ngrx/store';

import { AuthenticationModule } from './auth/authentication.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { selectedUserReducer } from './users/store/users.reducers';

@NgModule({
  imports: [
    BrowserModule,
    UsersModule,
    AuthenticationModule,
    AppRoutingModule,
    StoreModule.forRoot({ selectUser: selectedUserReducer })
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
