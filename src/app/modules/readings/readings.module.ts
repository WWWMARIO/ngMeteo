import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingsRoutingModule } from './readings-routing.module';
import { ReadingsComponent } from './pages/readings/readings.component';
import { ReadingsListComponent } from './components/readings-list/readings-list.component';
import { SharedModule } from "../shared/shared.module";
import { EditReadingsComponent } from './components/edit-readings/edit-readings.component';


@NgModule({
  declarations: [
    ReadingsComponent,
    ReadingsListComponent,
    EditReadingsComponent
  ],
  imports: [
    CommonModule,
    ReadingsRoutingModule,
    SharedModule
  ]
})
export class ReadingsModule { }
