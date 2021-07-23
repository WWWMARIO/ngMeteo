import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { LoginComponent } from "src/app/core/login/login.component";
import { ApiStationsService } from "../../../meteo-stations/api-stations.service";
import { ViewStationComponent } from "../../components/view-station/view-station.component";
/* import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'; */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  meteoStations$: Observable<any[]> = this.apiStationsService.getMeteoStations();

  constructor(
    private dialog: MatDialog,
    private apiStationsService: ApiStationsService) { }

  ngOnInit(): void {
  }

   login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      });
  }

  onClickStation(station) {
    const dialogRef = this.dialog.open(ViewStationComponent, {
      panelClass: 'custom-dialog-container',
      data:  station,

      // height: '90%',
    });
  }


}
