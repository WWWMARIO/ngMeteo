import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';





import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';
import { GetSensorTypePipe } from './pipes/get-sensor-type.pipe';
import { GetStationNamePipe } from './pipes/get-station-name.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GetLatestReadingForSensorPipe } from './pipes/get-latest-reading-for-sensor.pipe';









@NgModule({
  declarations: [/* OrdersListComponent, FilterMenuByCategoryPipe */
    ConfirmDeleteModalComponent, GetSensorTypePipe, GetStationNamePipe, GetLatestReadingForSensorPipe
  ],
  imports: [
    CommonModule,
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



  ],
  exports: [
    CommonModule,
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
    GetSensorTypePipe,
    GetStationNamePipe,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    GetLatestReadingForSensorPipe


  ],
})
export class SharedModule {}
