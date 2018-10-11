import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersService } from '../../users.service';
import { User } from '../../user.model';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-delete-user-box',
  templateUrl: './delete-user-box.component.html',
  styleUrls: ['./delete-user-box.component.scss']
})
export class DeleteUserBoxComponent implements OnInit {
  username: string;
  userId: string;
  msg: string;

  constructor(private usersService: UsersService,
    private store: Store<UserStore>) { }

  ngOnInit() {
    this.store.select('selectUser').subscribe((store) => {
      if (store.editingUser) {
        this.username = store.editingUser.first_name + ' ' + store.editingUser.last_name;
        this.userId = store.editingUser.id.toString();
      }
    });
  }


  deleteUser() {
    this.usersService.deleteUser(this.userId).subscribe((res) => {
      this.msg = 'Delete success';
    }, (error) => {
      this.msg = error;
    });
  }
}
