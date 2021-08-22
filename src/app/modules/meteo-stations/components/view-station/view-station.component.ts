import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiSensorsService } from "src/app/modules/sensors/api-sensors.service";
import { MeteoStation } from "../../pages/meteo-stations/meteo-stations.component";

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.scss']
})
export class ViewStationComponent implements OnInit {
  viewType: 'view' | 'edit' | 'sensors' | 'readings' = 'view'
  userAuthenticated = this.auth.authState;
  sensors$ = this.apiSensorsService.getSensorsForStation(this.data.id);
  readings$ = this.firestore.collection('readings').valueChanges({ idField: 'id' });
  sensorTypes$ = this.apiSensorsService.getSensorTypes()



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MeteoStation,
    private apiSensorsService: ApiSensorsService,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth

  ) { }

  ngOnInit(): void {

  }

}
