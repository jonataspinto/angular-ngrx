import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../core/store/reducers/index';
import { userLoading } from '../../core/store/selectors/user.selector';
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

  constructor(private userService: UsersService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.asyncUsers();
  }

  asyncUsers = async () => {
    this.storeUsers$ = await this.store.pipe(select(userLoading));
    this.storeUsers$.forEach(user => this.users = user);
  }
}
