import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from "./user/user.module";
import {ManageModule} from "./manage/manage.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
