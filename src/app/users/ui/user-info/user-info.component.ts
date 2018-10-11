import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SelectUserActions from '../../store/users.actions';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() avatarSrc: string;
  @Input() username: string;

  constructor(private store: Store<UserStore>) { }

  ngOnInit() {
  }

  closeWindow() {
    this.store.dispatch(new SelectUserActions.SelectUser(null));
  }
}
