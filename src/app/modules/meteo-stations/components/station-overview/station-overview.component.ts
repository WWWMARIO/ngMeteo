import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ApiSensorsService } from "src/app/modules/sensors/api-sensors.service";

@Component({
  selector: 'app-station-overview',
  templateUrl: './station-overview.component.html',
  styleUrls: ['./station-overview.component.scss']
})
export class StationOverviewComponent implements OnInit {
  @Input() data;
  sensors$
  readings$ = this.firestore.collection('readings').valueChanges({ idField: 'id' });
  sensorTypes$ = this.apiSensorsService.getSensorTypes()

  constructor(
    private apiSensorsService: ApiSensorsService,
    private firestore: AngularFirestore,) { }

  ngOnInit(): void {
    this.sensors$ = this.apiSensorsService.getSensorsForStation(this.data?.id);
  }

}
