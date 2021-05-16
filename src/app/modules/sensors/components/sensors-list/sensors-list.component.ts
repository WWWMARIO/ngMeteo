import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from "rxjs";


@Component({
  selector: 'app-sensors-list',
  templateUrl: './sensors-list.component.html',
  styleUrls: ['./sensors-list.component.scss']
})
export class SensorsListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  sensorTypes$: Observable<any[]>;
  sensors$: Observable<any[]>;

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

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.sensors$ = this.firestore.collection('meteoStation').valueChanges({ idField: 'id' });
    this.sensorTypes$ = this.firestore.collection('sensorTypes').valueChanges({ idField: 'id' });
    this.sensorsSub = this.firestore.collection('meteoStationSensor').valueChanges({ idField: 'id' }).subscribe((response)=>{
      console.log(response)
      this.dataSource.data = response;
      this.dataSource.sort = this.sort;
    });
  }

  viewSensorDetails(sensor) {
    console.log(sensor);
  }

  ngOnDestroy() {
    this.sensorsSub.unsubscribe();
  }

}
