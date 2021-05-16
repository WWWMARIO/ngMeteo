import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { SensorTypesListComponent } from './components/sensor-types-list/sensor-types-list.component';
import { SharedModule } from "../shared/shared.module";
import { EditSensorTypeModalComponent } from './components/edit-sensor-type-modal/edit-sensor-type-modal.component';
import { SensorsListComponent } from './components/sensors-list/sensors-list.component';


@NgModule({
  declarations: [
    SensorsComponent,
    SensorTypesListComponent,
    EditSensorTypeModalComponent,
    SensorsListComponent
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    SharedModule
  ]
})
export class SensorsModule { }
