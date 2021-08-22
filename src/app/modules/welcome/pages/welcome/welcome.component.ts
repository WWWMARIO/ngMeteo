import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/core/login/login.component";
import { MeteoStation } from "src/app/modules/meteo-stations/pages/meteo-stations/meteo-stations.component";
import { ApiStationsService } from "../../../meteo-stations/api-stations.service";
import { ViewStationComponent } from "../../../meteo-stations/components/view-station/view-station.component";
/* import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'; */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  map: google.maps.Map;
  meteoStations$: Observable<any[]> = this.apiStationsService.getMeteoStations();
/*   dragLatitude = 0;
  dragLongitude = 0; */


  constructor(
    private dialog: MatDialog,
    private apiStationsService: ApiStationsService
    ) { }

  ngOnInit(): void {
  }

   login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      });
  }

  onClickStation(station: MeteoStation) {
    const dialogRef = this.dialog.open(ViewStationComponent, {
      panelClass: 'custom-dialog-container',
      data:  station,
      height: '90%',
      width: '90%',


    });
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.map.setOptions({
      fullscreenControl: false,
  });
  }





}
