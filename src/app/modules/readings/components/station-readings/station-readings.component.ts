import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { ApiSensorsService } from "src/app/modules/sensors/api-sensors.service";
import { EditReadingsComponent } from "../edit-readings/edit-readings.component";

@Component({
  selector: 'app-station-readings',
  templateUrl: './station-readings.component.html',
  styleUrls: ['./station-readings.component.scss']
})
export class StationReadingsComponent implements OnInit {
  @Input() stationId
  sensors$
  sensorTypes$ = this.apiSensorsService.getSensorTypes()

  readings$ = this.firestore.collection('readings').valueChanges({ idField: 'id' });

  constructor(
    private apiSensorsService: ApiSensorsService,
    private firestore: AngularFirestore,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log(this.stationId)
    this.sensors$ = this.apiSensorsService.getSensorsForStation(this.stationId);
  }

  onNew(sensorId) {
    const dialogRef = this.dialog.open(EditReadingsComponent, {
      //height: '90%',
      width: '90%',
      data: {newReadingSensorid:sensorId}
    });
    /* dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); */
  }

}
