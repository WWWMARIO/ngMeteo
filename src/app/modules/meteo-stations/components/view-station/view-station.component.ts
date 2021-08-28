import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MeteoStation } from "../../pages/meteo-stations/meteo-stations.component";

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.scss']
})
export class ViewStationComponent implements OnInit {
  viewType: 'view' | 'edit' | 'sensors' | 'readings' = 'view'
  userAuthenticated = this.auth.authState;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MeteoStation,
    private auth: AngularFireAuth

  ) { }

  ngOnInit(): void {

  }

}
