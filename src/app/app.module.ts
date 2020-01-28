import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainersModule } from './containers/containers.module';
import { reducers, metaReducers } from './core/store/reducers';
import { StoreModule } from '@ngrx/store';
import { environment } from "./../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { UsersService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainersModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
