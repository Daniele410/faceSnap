import {Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";
import {AUTH_ROUTES} from "./auth/auth.module";


export const routes: Routes = [
  {path: 'auth', children: AUTH_ROUTES},
  {path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
  {path: '', component: LandingPageComponent}
];
