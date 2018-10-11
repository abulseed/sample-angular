import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../user.model';

import * as SelectUserActions from '../../store/users.actions';
import { UserStore } from '../../store/users-store.model';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
  @Input() user: User;

  constructor(private store: Store<UserStore>) { }

  ngOnInit() {
  }

  onEdit() {
    this.store.dispatch(new SelectUserActions.EditUser(this.user));
  }
}
