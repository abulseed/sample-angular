import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../user.model';
import { UsersService } from '../../users.service';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-users-list-content',
  templateUrl: './users-list-content.component.html',
  styleUrls: ['./users-list-content.component.scss']
})
export class UsersListContentComponent implements OnInit {
  users: User[] = [];
  selectedUserState: Observable<{ selectedUser: User }>;

  constructor(private usersService: UsersService,
    private store: Store<UserStore>) { }

  ngOnInit() {
    this.selectedUserState = this.store.select('selectUser');
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
