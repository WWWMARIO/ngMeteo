import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EditSensorModalComponent } from "../../components/edit-sensor-modal/edit-sensor-modal.component";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNew() {
    const dialogRef = this.dialog.open(EditSensorModalComponent, {
      // height: '90%',
      width: '90%',
    });
  }

}
