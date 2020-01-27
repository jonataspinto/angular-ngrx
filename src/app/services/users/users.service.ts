import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/core/store/actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public api = 'https://reqres.in/api/users';
  public users;

  constructor(private store: Store<any>) {
    this.users = this.getUsers();
  }

  getUsers() {
    return fetch(this.api).then(res => res.json()).then(res => {
      this.users = res.data;
      this.store.dispatch(new AppActions.LoadUsers(res.data));

      return res.data;
    }).catch(err => `${err} Error!!!!`);
  }
}
