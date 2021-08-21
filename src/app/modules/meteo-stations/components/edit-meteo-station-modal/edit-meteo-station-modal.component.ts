import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import firebase from "firebase/app";
import { ConfirmDeleteModalComponent } from "src/app/modules/shared/components/confirm-delete-modal/confirm-delete-modal.component";
import { ApiStationsService } from "../../api-stations.service";
import { MeteoStation } from "../../pages/meteo-stations/meteo-stations.component";

@Component({
  selector: 'app-edit-meteo-station-modal',
  templateUrl: './edit-meteo-station-modal.component.html',
  styleUrls: ['./edit-meteo-station-modal.component.scss'],
})
export class EditMeteoStationModalComponent implements OnInit {
  meteoStationForm: FormGroup;
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditMeteoStationModalComponent>,
    private dialog: MatDialog,
    private apiStationsService: ApiStationsService
  ) {}

  ngOnInit(): void {
    console.log(this.data)
    if (this.data?.id) {
      this.meteoStationForm = this.formBuilder.group({
        name: [this.data.name, [Validators.required]],
        imageUrl: [this.data.imageUrl, [Validators.required]],
        description: [this.data.description, [Validators.required]],
        longitude: [this.data.geoLocation.longitude, [Validators.required]],
        latitude: [this.data.geoLocation.latitude, [Validators.required]],
      });
    } else if (this.data?.latitude && this.data?.longitude) {
      this.meteoStationForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
        description: ['', [Validators.required]],
        longitude: [this.data.longitude, [Validators.required]],
        latitude: [this.data.latitude, [Validators.required]],
      });
    } else {
      this.meteoStationForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
        description: ['', [Validators.required]],
        longitude: ['', [Validators.required]],
        latitude: ['', [Validators.required]],
      });
    }
  }

  async updateStation() {
    if (this.meteoStationForm.valid) {
      console.log(this.meteoStationForm.value);
      const updatedMeteoStation = {
        name: this.meteoStationForm.value.name,
        description: this.meteoStationForm.value.description,
        imageUrl: this.meteoStationForm.value.imageUrl,
        geoLocation: new firebase.firestore.GeoPoint(this.meteoStationForm.value.latitude, this.meteoStationForm.value.longitude)
      };
      try {
        this.loading = true;
        await this.firestore.collection('meteoStation').doc(this.data.id).update(updatedMeteoStation);
        this.dialogRef.close();
        this.snackBar.open('Meteo station updated', '', {
          duration: 2000
        });
        this.loading = false;
      } catch (err) {
        this.snackBar.open('Error creating new meteo station', '', {
          duration: 2000
        });
        this.loading = false;
      }
    } else {
      this.snackBar.open('Please input valid meteo station information', '', {
        duration: 2000
      });
    }
  }

  async newStation() {
    if (this.meteoStationForm.valid) {
      console.log(this.meteoStationForm.value);
      const newMeteoStation = {
        name: this.meteoStationForm.value.name,
        description: this.meteoStationForm.value.description,
        imageUrl: this.meteoStationForm.value.imageUrl,
        geoLocation: new firebase.firestore.GeoPoint(this.meteoStationForm.value.latitude, this.meteoStationForm.value.longitude)
      };
      try {
        this.loading = true;
        await this.firestore.collection('meteoStation').add(newMeteoStation);
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error creating new meteo station', '', {
          duration: 2000
        });
      }

    } else {
      this.snackBar.open('Please input valid meteo station information', '', {
        duration: 2000
      });
    }
  }

  onDelete(meteoStationId: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      // height: '90%',
      // width: '90%',
    });
    dialogRef.afterClosed().subscribe(async (confirmDelete: boolean) => {
      if (confirmDelete) {
        // this.firestore.collection('meteoStation').doc(meteoStation.id).delete();
        this.dialogRef.close();
        await this.apiStationsService.deleteMeteoStation(meteoStationId);
        this.snackBar.open('Station deleted', '', {
          duration: 2000
        });

      }
    });
  }
}
