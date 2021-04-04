import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";
import { ShellComponent } from "./core/shell/shell.component";
import { WelcomeComponent } from "./modules/welcome/welcome.component";

/* const routes: Routes = [
  { path: 'meteoStations', loadChildren: () => import('./modules/meteo-station/meteo-station.module').then(m => m.MeteoStationModule) },
  { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) }]; */

  const routes: Routes = [
    {
      path: '',
      component: ShellComponent,
      children: [
        {
          path: 'meteo-stations',
          // canActivate: [AuthGuard],
          loadChildren: () =>
            import('./modules/meteo-stations/meteo-stations.module').then((m) => m.MeteoStationModule),

        },
         { path: 'sensors', loadChildren: () => import('./modules/sensors/sensors.module').then(m => m.SensorsModule) },
      ],

    },
    {
      path: 'welcome',
      component: WelcomeComponent,
    },

    {
      path: '**',
      component: PageNotFoundComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
