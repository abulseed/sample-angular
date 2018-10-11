import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';
import { Store } from '@ngrx/store';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-edit-user-box',
  templateUrl: './edit-user-box.component.html',
  styleUrls: ['./edit-user-box.component.scss']
})
export class EditUserBoxComponent implements OnInit {
  userAvatar: string;
  username: string;
  userId;

  msg: string;

  constructor(private usersService: UsersService,
    private store: Store<UserStore>) { }

  ngOnInit() {
    this.store.select('selectUser').subscribe((store) => {
      if (store.editingUser) {
        this.username = store.editingUser.first_name + ' ' + store.editingUser.last_name;
        this.userAvatar = store.editingUser.avatar;
        this.userId = store.editingUser.id.toString();
      }
    });
  }

  onSubmit(form: NgForm) {
    const username = form.value.name;
    const jobTitle = form.value.jobTitle;
    this.usersService.editUser(username, jobTitle, this.userId).subscribe((response) => {
      console.log('Edit Success');
      this.msg = 'Success';
    }, (errorMsg: string) => {
      this.msg = errorMsg;
      console.log(this.msg);
    });
  }
}
