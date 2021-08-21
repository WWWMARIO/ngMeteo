import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ApiStationsService } from "src/app/modules/meteo-stations/api-stations.service";
import { EditMeteoStationModalComponent } from "src/app/modules/meteo-stations/components/edit-meteo-station-modal/edit-meteo-station-modal.component";
import { MeteoStation } from "src/app/modules/meteo-stations/pages/meteo-stations/meteo-stations.component";
import { ViewStationComponent } from "src/app/modules/meteo-stations/components/view-station/view-station.component";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  meteoStations$: Observable<any[]> = this.apiStationsService.getMeteoStations();
  map;
  mapClickListener ;



  constructor(
    private apiStationsService: ApiStationsService,
    private zone: NgZone,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNew() {
    const dialogRef = this.dialog.open(EditMeteoStationModalComponent, {
      // height: '90%',
      width: '450px',
    });
    /* dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); */
  }


  onClickStation(meteoStation: MeteoStation) {
    const dialogRef = this.dialog.open(ViewStationComponent, {
      data:  meteoStation,
      height: '90%',
      width: '90%',
      panelClass: 'custom-dialog-container',
    });
  }

 /*  onClickStation(station) {
    // const dialogRef = this.dialog.open(ViewStationComponent, {
    //   panelClass: 'custom-dialog-container',
    //   data:  station,
//
    //   // height: '90%',
    // });
    console.log(station)
  } */
  onClickMap(lat: number, long: number) {
    const dialogRef = this.dialog.open(EditMeteoStationModalComponent, {
      data:  {latitude: lat, longitude: long },
      // height: '90%',
      width: '450px',
      panelClass: 'custom-dialog-container',
    });
  }




  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        // Here we can get correct event
        this.onClickMap(e.latLng.lat(), e.latLng.lng())
        // console.log(e.latLng.lat(), e.latLng.lng());
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.mapClickListener) {
      this.mapClickListener.remove();
    }
  }

}
