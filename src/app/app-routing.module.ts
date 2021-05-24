import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ShellComponent } from './core/shell/shell.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

/* const routes: Routes = [
  { path: 'meteoStations', loadChildren: () => import('./modules/meteo-station/meteo-station.module').then(m => m.MeteoStationModule) },
  { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) }]; */

const redirectUnauthorizedToWelcome = () => redirectUnauthorizedTo(['welcome']);

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToWelcome },
    children: [
      {
        path: 'meteo-stations',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToWelcome },
        loadChildren: () =>
          import('./modules/meteo-stations/meteo-stations.module').then(
            (m) => m.MeteoStationModule
          ),
      },
      {
        path: 'sensors',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToWelcome },
        loadChildren: () =>
          import('./modules/sensors/sensors.module').then(
            (m) => m.SensorsModule
          ),
      },
      {
        path: 'readings',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToWelcome },
        loadChildren: () =>
          import('./modules/readings/readings.module').then(
            (m) => m.ReadingsModule
          ),
      },
    ],
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
