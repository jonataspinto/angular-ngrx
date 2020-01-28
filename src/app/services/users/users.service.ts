import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/core/store/actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public api = 'https://reqres.in/api/users';

  constructor(private store: Store<any>) {
    this.getUsers();
  }

  getUsers() {
    return fetch(this.api).then(res => res.json()).then(res => {
      this.store.dispatch(new AppActions.LoadUsers(res.data));
    }).catch(err => `${err} Error!!!!`);
  }
}
