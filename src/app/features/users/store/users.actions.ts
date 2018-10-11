import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const SELECT_USER = 'SELECT_USER';
export const EDIT_USER = 'EDIT_USER';

export class EditUser implements Action {
  readonly type = EDIT_USER;

  constructor(public payload: User) { }
}

export class SelectUser implements Action {
  readonly type = SELECT_USER;

  constructor(public payload: User) { }
}

export type SelectUserActions = SelectUser | EditUser;
