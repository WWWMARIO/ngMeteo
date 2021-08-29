import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ApiStationsService } from 'src/app/modules/meteo-stations/api-stations.service';
import { ApiSensorsService } from 'src/app/modules/sensors/api-sensors.service';

export class Reading {
  id: string;
  value: number;
  sensorId: string;
}

@Component({
  selector: 'app-edit-readings',
  templateUrl: './edit-readings.component.html',
  styleUrls: ['./edit-readings.component.scss'],
})
export class EditReadingsComponent implements OnInit {
  readingForm: FormGroup
  upperLimit;
  lowerLimit
  // sensors$: Observable<any[]>;
  // sensorTypes$: Observable<any[]>;
  // stations$: Observable<any[]>;
  loading = false;

  regexDecimalValidator = Validators.pattern(
    /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private apiSensorsService: ApiSensorsService,
    private apiStationsService: ApiStationsService,
    private dialogRef: MatDialogRef<EditReadingsComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.sensors$ = this.apiSensorsService.getSensors();
    // this.sensorTypes$ = this.apiSensorsService.getSensorTypes();
    // this.stations$ = this.apiStationsService.getMeteoStations();
    // console.log(this.data)
    const parentSensorId = this.data.newReadingSensorid?this.data.newReadingSensorid:this.data.sensorId;
    this.firestore.collection('meteoStationSensor').doc(parentSensorId).ref.get().then( (parentSensor) => {
      if (parentSensor.exists) {
        this.lowerLimit = (parentSensor.data() as any ).lowerLimit
        this.upperLimit = (parentSensor.data() as any ).upperLimit
        this.createForm( this.lowerLimit, this.upperLimit );
      } else {
        this.createForm(-999999999 , 999999999 );
        console.log("There is no document!");
      }
    }).catch(function (error) {
      this.createForm(-999999999 , 999999999 );
      console.log("There was an error getting your document:", error);
    });

  }


  createForm(min,max) {
    if (this.data.newReadingSensorid) {
      this.readingForm = this.formBuilder.group({
        value: ['', [Validators.required, this.regexDecimalValidator, Validators.min(min), Validators.max(max) ]],
        sensorId: [this.data.newReadingSensorid, [Validators.required]],
      });
    } else if (this.data) {
      this.readingForm = this.formBuilder.group({
        value: [
          this.data.value,
          [Validators.required, this.regexDecimalValidator, Validators.min(min), Validators.max(max)],
        ],
        sensorId: [this.data.sensorId, [Validators.required]],
      });
    } else {
      this.readingForm = this.formBuilder.group({
        value: ['', [Validators.required, this.regexDecimalValidator]],
        sensorId: ['', [Validators.required]],
      });
    }
  }


  async newReading() {
    console.log(this.readingForm)
    if (this.readingForm.valid) {
      console.log(this.readingForm.value);
      const newReading = {
        value: this.readingForm.value.value,
        sensorId: this.readingForm.value.sensorId,
        timeStamp: new Date(),
      };
      try {
        this.loading = true;
        await this.firestore.collection('readings').add(newReading);
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error creating new reading', '', {
          duration: 2000,
        });
        this.loading = false;
      }
    } // else {
      // this.snackBar.open('Please input valid reading information', '', {
      //   duration: 2000
      // });
      // }
  }

  async updateReading() {
    // console.log(this.readingForm)
    if (this.readingForm.valid) {
      console.log(this.readingForm.value);
      const updatedReading = {
        value: this.readingForm.value.value,
        sensorId: this.readingForm.value.sensorId,
        timeStamp: new Date(),
      };
      try {
        this.loading = true;
        await this.firestore
          .collection('readings')
          .doc(this.data.id)
          .update(updatedReading);
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error creating new reading', '', {
          duration: 2000,
        });
      }
    } /*  else {
      this.snackBar.open('Please input valid reading information', '', {
        duration: 2000
      });
    } */
  }
}
