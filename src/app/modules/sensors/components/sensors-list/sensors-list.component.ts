import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from "rxjs";
import { ApiStationsService } from "src/app/modules/meteo-stations/api-stations.service";
import { ConfirmDeleteModalComponent } from "src/app/modules/shared/components/confirm-delete-modal/confirm-delete-modal.component";
import { ApiSensorsService } from "../../api-sensors.service";
import { EditSensorModalComponent } from "../edit-sensor-modal/edit-sensor-modal.component";


@Component({
  selector: 'app-sensors-list',
  templateUrl: './sensors-list.component.html',
  styleUrls: ['./sensors-list.component.scss']
})
export class SensorsListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  sensorTypes$: Observable<any[]>;
  stations$: Observable<any[]>;

  sensorsSub: Subscription;


  displayedColumns: string[] = [
    'lowerLimit',
    'upperLimit',
    'description',
    'sensorTypeId',
    'stationId',
    'review'
  ];



  dataSource = new MatTableDataSource([]);

  constructor(
    private apiSensorsService: ApiSensorsService,
    private apiStationsService: ApiStationsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.stations$ = this.firestore.collection('meteoStation').valueChanges({ idField: 'id' });
    this.stations$ = this.apiStationsService.getMeteoStations();
    //  = this.firestore.collection('sensorTypes').valueChanges({ idField: 'id' });
    this.sensorTypes$ = this.apiSensorsService.getSensorTypes()
    this.sensorsSub = this.apiSensorsService.getSensors().subscribe((response)=>{
      this.dataSource.data = response;
      this.dataSource.sort = this.sort;
    });
  }

  viewSensorDetails(sensor) {
    const dialogRef = this.dialog.open(EditSensorModalComponent, {
      data:  sensor,
      // height: '90%',
      width: '90%',
    });
  }

  deleteSensor(sensor) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      // height: '90%',
      // width: '90%',
    });
    dialogRef.afterClosed().subscribe((confirmDelete: boolean) => {
      if (confirmDelete) {
        // this.firestore.collection('meteoStation').doc(meteoStation.id).delete();
        this.apiSensorsService.deleteSensor(sensor.id);
      }
    });
  }

  viewReadings(sensor) {
    console.log(sensor)
  }

  ngOnDestroy() {
    this.sensorsSub.unsubscribe();
  }

}
