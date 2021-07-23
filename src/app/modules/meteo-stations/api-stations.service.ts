import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ApiStationsService {


  constructor(private firestore: AngularFirestore) { }

  getMeteoStations() {
    return this.firestore.collection('meteoStation').valueChanges({ idField: 'id' });
  }

  deleteMeteoStations(meteoStationId) {
    return this.firestore.collection('meteoStation').doc(meteoStationId).delete();
  }
}
