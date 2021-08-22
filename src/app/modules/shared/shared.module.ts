import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { GetSensorTypePipe } from './pipes/get-sensor-type.pipe';
import { GetStationNamePipe } from './pipes/get-station-name.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GetLatestReadingForSensorPipe } from './pipes/get-latest-reading-for-sensor.pipe';
import { ViewStationComponent } from '../meteo-stations/components/view-station/view-station.component';
import { ReadingsComponent } from "../readings/pages/readings/readings.component";
import { ReadingsListComponent } from "../readings/components/readings-list/readings-list.component";
import { EditReadingsComponent } from "../readings/components/edit-readings/edit-readings.component";
import { EditMeteoStationModalComponent } from "../meteo-stations/components/edit-meteo-station-modal/edit-meteo-station-modal.component";
import { GetHighestReadingForSensorPipe } from './pipes/get-highest-reading-for-sensor.pipe';
import { GetLowestReadingForSensorPipe } from './pipes/get-lowest-reading-for-sensor.pipe';
import { GetAverageReadingForSensorPipe } from './pipes/get-average-reading-for-sensor.pipe';
import { SensorsComponent } from "../sensors/pages/sensors/sensors.component";
import { SensorTypesListComponent } from "../sensors/components/sensor-types-list/sensor-types-list.component";
import { EditSensorTypeModalComponent } from "../sensors/components/edit-sensor-type-modal/edit-sensor-type-modal.component";
import { SensorsListComponent } from "../sensors/components/sensors-list/sensors-list.component";
import { EditSensorModalComponent } from "../sensors/components/edit-sensor-modal/edit-sensor-modal.component";
import { StationReadingsComponent } from "../readings/components/station-readings/station-readings.component";
import { FilterReadingsForSensorPipe } from './pipes/filter-readings-for-sensor.pipe';


@NgModule({
  declarations: [
    /* OrdersListComponent, FilterMenuByCategoryPipe */
    ConfirmDeleteModalComponent,
    GetSensorTypePipe,
    GetStationNamePipe,
    GetLatestReadingForSensorPipe,
    ViewStationComponent,
    ReadingsComponent,
    ReadingsListComponent,
    EditReadingsComponent,
    EditMeteoStationModalComponent,
    GetHighestReadingForSensorPipe,
    GetLowestReadingForSensorPipe,
    GetAverageReadingForSensorPipe,
    SensorsComponent,
    SensorTypesListComponent,
    EditSensorTypeModalComponent,
    SensorsListComponent,
    EditSensorModalComponent,
    StationReadingsComponent,
    FilterReadingsForSensorPipe

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonToggleModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    GetSensorTypePipe,
    GetStationNamePipe,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    GetLatestReadingForSensorPipe,
    MatButtonToggleModule,
    ViewStationComponent,
    ReadingsComponent,
    ReadingsListComponent,
    EditReadingsComponent,
    EditMeteoStationModalComponent,
    SensorsComponent,
    SensorTypesListComponent,
    EditSensorTypeModalComponent,
    SensorsListComponent,
    EditSensorModalComponent,
    StationReadingsComponent
  ],
})
export class SharedModule {}
