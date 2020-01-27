import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

import { UsersService } from '../services/users/users.service';
import { StoreModule } from '@ngrx/store';
import * as fromUser from '../core/store/reducers/user.reducer';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('users', fromUser.reducer)
  ]
})
export class ContainersModule { }
