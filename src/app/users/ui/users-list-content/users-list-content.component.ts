import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UsersService } from '../../users.service';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-users-list-content',
  templateUrl: './users-list-content.component.html',
  styleUrls: ['./users-list-content.component.scss']
})
export class UsersListContentComponent implements OnInit {
  users: User[] = [];
  selectedUser: User;

  constructor(private usersService: UsersService, private notificationService: NotificationService<String>) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
    this.notificationService.notifier.subscribe((val) => {
      if (typeof val === 'boolean') {
        this.selectedUser = null;
      } else {
        const selectedUserId: number = +val;
        this.selectedUser = this.users.find((user) => {
          return user.id === +selectedUserId;
        });
      }
    });
  }
}
