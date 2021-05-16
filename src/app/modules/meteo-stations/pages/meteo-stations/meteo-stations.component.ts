import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from "@angular/material/dialog";
import { EditMeteoStationModalComponent } from "../../components/edit-meteo-station-modal/edit-meteo-station-modal.component";

export interface MeteoStation {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  geolocation: {
    longitude: number;
    latitude: number
  }
}

@Component({
  selector: 'app-meteo-stations',
  templateUrl: './meteo-stations.component.html',
  styleUrls: ['./meteo-stations.component.scss']
})
export class MeteoStationsComponent implements OnInit {

  panelOpenState = false;
  meteoStations: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.meteoStations = this.firestore.collection('meteoStation').valueChanges({ idField: 'id' });
  }

  onNew() {
    const dialogRef = this.dialog.open(EditMeteoStationModalComponent, {
      height: '90%',
      width: '90%',
    });
    /* dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); */
  }


  onEdit(meteoStation) {
    const dialogRef = this.dialog.open(EditMeteoStationModalComponent, {
      data:  meteoStation,
      height: '90%',
      width: '90%',
    });
  }

  onDelete(meteoStation) {
    this.firestore.collection('meteoStation').doc(meteoStation.id).delete();
  }

}
