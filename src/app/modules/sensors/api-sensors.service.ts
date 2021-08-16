import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiSensorsService {

  constructor(private firestore: AngularFirestore) { }

  getSensors() {
    return this.firestore.collection('meteoStationSensor').valueChanges({ idField: 'id' })
  }

  getSensorsForStation(stationId) {
    return this.firestore.collection('meteoStationSensor').valueChanges({ idField: 'id' }).pipe(map((sensors)=> {
      return sensors.filter((sensor: any)=>{
        return sensor.stationId === stationId;
      })
    }))
  }

  addNewSensor(newSensor) {
    return this.firestore.collection('meteoStationSensor').add(newSensor);
  }

  updateSensor(updatedSensorId, updatedSensor) {
    return this.firestore.collection('meteoStationSensor').doc(updatedSensorId).update(updatedSensor);
  }

  deleteSensor(sensorId) {
    return this.firestore.collection('meteoStationSensor').doc(sensorId).delete();
  }






  getSensorTypes() {
    return this.firestore.collection('sensorTypes').valueChanges({ idField: 'id' });
  }

  deleteSensorType(sensorTypeId) {
    return this.firestore.collection('sensorTypes').doc(sensorTypeId).delete();
  }
}
