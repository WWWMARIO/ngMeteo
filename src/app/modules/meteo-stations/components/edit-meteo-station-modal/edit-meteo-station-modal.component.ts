import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
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

  updateStation() {
    if (this.meteoStationForm.valid) {
      console.log(this.meteoStationForm.value);
    }
  }

  newStation() {
    if (this.meteoStationForm.valid) {
      console.log(this.meteoStationForm.value);
      const newMeteoStation = {
        name: this.meteoStationForm.value.name,
        description: this.meteoStationForm.value.description,
        imageUrl: this.meteoStationForm.value.imageUrl,
        geoLocation: {
          longitude: this.meteoStationForm.value.longitude,
          latitude: this.meteoStationForm.value.latitude},
      };
    }
  }
}
