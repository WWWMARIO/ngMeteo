import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import firebase from "firebase/app";

@Component({
  selector: 'app-edit-meteo-station-modal',
  templateUrl: './edit-meteo-station-modal.component.html',
  styleUrls: ['./edit-meteo-station-modal.component.scss'],
})
export class EditMeteoStationModalComponent implements OnInit {
  meteoStationForm: FormGroup;
  loading = false;
  isNewStation = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditMeteoStationModalComponent>,
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.meteoStationForm = this.formBuilder.group({
        name: [this.data.name, [Validators.required]],
        imageUrl: [this.data.imageUrl, [Validators.required]],
        description: [this.data.description, [Validators.required]],
        longitude: [this.data.geoLocation.longitude, [Validators.required]],
        latitude: [this.data.geoLocation.latitude, [Validators.required]],
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
}
