import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeteoStationRoutingModule } from './meteo-stations-routing.module';
import { MeteoStationsComponent } from './pages/meteo-stations/meteo-stations.component';
import { SharedModule } from "../shared/shared.module";
import { EditMeteoStationModalComponent } from './components/edit-meteo-station-modal/edit-meteo-station-modal.component';


@NgModule({
  declarations: [
    MeteoStationsComponent,
    EditMeteoStationModalComponent
  ],
  imports: [
    CommonModule,
    MeteoStationRoutingModule,
    SharedModule
  ]
})
export class MeteoStationModule { }
