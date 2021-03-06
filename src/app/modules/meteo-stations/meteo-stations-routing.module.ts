import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoStationsComponent } from './pages/meteo-stations/meteo-stations.component';

const routes: Routes = [{ path: '', component: MeteoStationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoStationRoutingModule { }
