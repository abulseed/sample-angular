import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SelectUserActions from '../../store/users.actions';
import { User } from '../../user.model';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  @Input() avatarSrc: string;
  @Input() username: string;
  @Input() user: User;
  selected = false;

  constructor(private store: Store<UserStore>) { }

  ngOnInit() {
    this.store.select('selectUser').subscribe((user) => {
      if (user.selectedUser) {
        this.selected = this.user.id === user.selectedUser.id;
      } else {
        this.selected = false;
      }
    });
  }

  onSelect() {
    this.store.dispatch(new SelectUserActions.SelectUser(this.user));
  }
}
