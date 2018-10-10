import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UsersComponent } from './users.component';
import { UsersListHeaderComponent } from './ui/users-list-header/users-list-header.component';
import { UserPanelComponent } from './ui/user-panel/user-panel.component';
import { UserAvatarComponent } from './ui/user-avatar/user-avatar.component';
import { EditButtonComponent } from './ui/edit-button/edit-button.component';
import { DeleteButtonComponent } from './ui/delete-button/delete-button.component';
import { DetailsButtonComponent } from './ui/details-button/details-button.component';
import { UserPanelHeadingComponent } from './ui/user-panel-heading/user-panel-heading.component';
import { UsersListContentComponent } from './ui/users-list-content/users-list-content.component';
import { UserInfoComponent } from './ui/user-info/user-info.component';
import { AddUserBoxComponent } from './ui/add-user-box/add-user-box.component';
import { EditUserBoxComponent } from './ui/edit-user-box/edit-user-box.component';
import { DeleteUserBoxComponent } from './ui/delete-user-box/delete-user-box.component';
import { AuthenticationModule } from '../auth/authentication.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    AuthenticationModule
  ],
  declarations: [
    UsersComponent,
    UsersListHeaderComponent,
    UserPanelComponent,
    UserAvatarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DetailsButtonComponent,
    UserPanelHeadingComponent,
    UsersListContentComponent,
    UserInfoComponent,
    AddUserBoxComponent,
    EditUserBoxComponent,
    DeleteUserBoxComponent
  ]
})
export class UsersModule { }
