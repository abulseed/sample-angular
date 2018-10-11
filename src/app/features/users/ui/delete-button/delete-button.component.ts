import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../user.model';

import * as SelectUserActions from '../../store/users.actions';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {
  @Input() user: User;

  constructor(private store: Store<UserStore>) { }

  ngOnInit() {
  }

  onDelete() {
    this.store.dispatch(new SelectUserActions.EditUser(this.user));
  }
}
