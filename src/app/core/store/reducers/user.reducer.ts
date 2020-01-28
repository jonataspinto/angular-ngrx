import { Action } from '@ngrx/store';

import { AppActions } from '../actions';
export interface UserState {
  data: [];
}

export const initialState: UserState = {
  data: [],
};

export function reducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case AppActions.UsersActionTypes.LOAD_USERS:

      const payload = action['payload'];

      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}
