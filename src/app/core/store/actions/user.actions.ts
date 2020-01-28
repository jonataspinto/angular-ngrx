import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LOAD_USERS = '[User] Load Users'
}
export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
  constructor(public payload) { }
}
