import { Action } from '@ngrx/store';

import { AppActions } from '../actions';

export interface UserState {
  users: [];
}

export const initialState: UserState = {
  users: [],
};

export function reducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case AppActions.UsersActionTypes.LOAD_USERS:

      const payload = action['users'];

      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
}
