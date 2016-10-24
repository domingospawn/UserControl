import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { UserComponent }  from './user/user.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'new-user', component: UserComponent },
      { path: '', component: AppComponent }
    ])
  ],
  declarations: [
    AppComponent,
    UserComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
