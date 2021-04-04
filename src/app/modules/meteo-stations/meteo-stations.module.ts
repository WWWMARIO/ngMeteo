import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeteoStationRoutingModule } from './meteo-stations-routing.module';
import { MeteoStationsComponent } from './meteo-stations.component';


@NgModule({
  declarations: [
    MeteoStationsComponent
  ],
  imports: [
    CommonModule,
    MeteoStationRoutingModule
  ]
})
export class MeteoStationModule { }
