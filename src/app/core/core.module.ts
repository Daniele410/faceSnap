import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {httpInterceptorProvider} from "./interceptors";
import {HeaderComponent} from "./components/header/header.component";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    httpInterceptorProvider,
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CoreModule {
}
