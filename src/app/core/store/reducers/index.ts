import { ActionReducerMap,
  MetaReducer } from '@ngrx/store';

import * as fromUser from './user.reducer';

export interface AppState {
  users: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUser.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
