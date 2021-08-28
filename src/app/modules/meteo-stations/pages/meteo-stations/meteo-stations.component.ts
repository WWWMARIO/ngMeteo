import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { EditMeteoStationModalComponent } from "../../components/edit-meteo-station-modal/edit-meteo-station-modal.component";
import { ConfirmDeleteModalComponent } from "src/app/modules/shared/components/confirm-delete-modal/confirm-delete-modal.component";
import { ApiStationsService } from "../../api-stations.service";
import { ViewStationComponent } from "../../components/view-station/view-station.component";

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
  route = 'list'

  panelOpenState = false;
  meteoStations$: Observable<any[]> = this.apiStationsService.getMeteoStations();

  constructor(
    private dialog: MatDialog,
    private apiStationsService: ApiStationsService) { }

  ngOnInit(): void {
  }

  onNew() {
    const dialogRef = this.dialog.open(EditMeteoStationModalComponent, {
      // height: '90%',
      width: '90%',
    });
  }

  onClickStation(meteoStation: MeteoStation) {
    const dialogRef = this.dialog.open(ViewStationComponent, {
      data:  meteoStation,
      height: '90%',
      width: '90%',
      panelClass: 'custom-dialog-container',
    });
  }

}
