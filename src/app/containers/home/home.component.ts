import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../core/store/reducers/index';
import { AppActions } from '../../core/store/actions/index';
import {
  userLoading
} from '../../core/store/selectors/user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'angular-ngrx';
  public users: any;
  public storeUsers$: Observable<any>;

  constructor(private userService: UsersService, private store: Store<any>) {
  }

  ngOnInit() {
    this.asyncUsers();
  }

  asyncUsers = async () => {
    this.users = await this.userService.users;
    this.storeUsers$ = this.store.pipe(select(userLoading));
    console.log(this.store.pipe(select(userLoading)));
  }
}
