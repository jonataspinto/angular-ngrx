import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers/index';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = (state: AppState) => state.users;

export const userLoading = createSelector(
  selectUserState,
  (state: fromUser.UserState) => state.data
);
