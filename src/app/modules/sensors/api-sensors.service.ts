import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ApiSensorsService {

  constructor(private firestore: AngularFirestore) { }

  getSensors() {
    return this.firestore.collection('meteoStationSensor').valueChanges({ idField: 'id' })
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
