import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { UsersListHeaderComponent } from './users-list-header/users-list-header.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { DetailsButtonComponent } from './details-button/details-button.component';
import { UserPanelHeadingComponent } from './user-panel-heading/user-panel-heading.component';
import { UsersListContentComponent } from './users-list-content/users-list-content.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddUserBoxComponent } from './add-user-box/add-user-box.component';
import { EditUserBoxComponent } from './edit-user-box/edit-user-box.component';
import { DeleteUserBoxComponent } from './delete-user-box/delete-user-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    UsersListHeaderComponent,
    UserPanelComponent,
    UserAvatarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DetailsButtonComponent,
    UserPanelHeadingComponent,
    UsersListContentComponent,
    UserInfoComponent,
    LoginFormComponent,
    AddUserBoxComponent,
    EditUserBoxComponent,
    DeleteUserBoxComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
