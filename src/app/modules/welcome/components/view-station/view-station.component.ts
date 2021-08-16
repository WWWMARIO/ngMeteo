import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiSensorsService } from "src/app/modules/sensors/api-sensors.service";

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.scss']
})
export class ViewStationComponent implements OnInit {
  sensors$
  readings$

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private apiSensorsService: ApiSensorsService,
    private firestore: AngularFirestore

  ) { }

  ngOnInit(): void {
    this.sensors$ = this.apiSensorsService.getSensorsForStation(this.data.id)
    this.readings$ = this.firestore.collection('readings').valueChanges({ idField: 'id' });
  }

}
