import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AsyncPipe} from "@angular/common";
import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {AuthModule} from "./auth/auth.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
