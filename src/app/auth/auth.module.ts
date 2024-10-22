import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {Routes} from "@angular/router";

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginComponent

  ]
})
export class AuthModule {
}
