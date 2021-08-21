import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EditSensorModalComponent } from "../../components/edit-sensor-modal/edit-sensor-modal.component";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {
  @Input() stationId;

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.stationId)
  }

  onNew(stationId) {
    const dialogRef = this.dialog.open(EditSensorModalComponent, {
      data: {newSensorStationId: stationId},
      // height: '90%',
      width: '90%',
    });
  }

}
