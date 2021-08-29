import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { WelcomeComponent } from './modules/welcome/pages/welcome/welcome.component';



const redirectUnauthorizedToWelcome = () => redirectUnauthorizedTo(['welcome']);

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToWelcome },
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'meteo-stations'
      },
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
        path: 'map',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToWelcome },
        loadChildren: () =>
          import('./modules/map/map.module').then((m) => m.MapModule),
      }
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
    redirectTo: 'meteo-stations'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
