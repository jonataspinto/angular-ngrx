import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainersModule } from './containers/containers.module';
import { reducers } from './core/store/reducers';
import { StoreModule } from '@ngrx/store';
import { UsersService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainersModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
