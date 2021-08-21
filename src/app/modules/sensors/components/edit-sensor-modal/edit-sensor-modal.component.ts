import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiStationsService } from "src/app/modules/meteo-stations/api-stations.service";
import { Observable } from "rxjs";
import { ApiSensorsService } from "../../api-sensors.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-edit-sensor-modal',
  templateUrl: './edit-sensor-modal.component.html',
  styleUrls: ['./edit-sensor-modal.component.scss']
})
export class EditSensorModalComponent implements OnInit {
  sensorForm: FormGroup;
  meteoStations$: Observable<any[]> = this.apiStationsService.getMeteoStations();
  sensorTypes$: Observable<any[]> = this.apiSensorsService.getSensorTypes();
  loading = false;
  decimalNumberRegex = new RegExp('^[0-9]+$')  // '^[0-9]+$'


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private apiStationsService: ApiStationsService,
    private apiSensorsService: ApiSensorsService,
    private dialogRef: MatDialogRef<EditSensorModalComponent>,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    if (this.data.newSensorStationId) {
      this.sensorForm = this.formBuilder.group({
        upperLimit: ['', [Validators.required, Validators.pattern(this.decimalNumberRegex)]],
        lowerLimit: ['', [Validators.required, Validators.pattern(this.decimalNumberRegex)]],
        description: ['', [Validators.required]],
        sensorTypeId: ['', [Validators.required]],
        stationId: [this.data.newSensorStationId, [Validators.required]],
      });
    }
    else if (this.data) {
      this.sensorForm = this.formBuilder.group({
        upperLimit: [this.data.upperLimit, [Validators.required, Validators.pattern(this.decimalNumberRegex)]],
        lowerLimit: [this.data.lowerLimit, [Validators.required, Validators.pattern(this.decimalNumberRegex)]],
        description: [this.data.description, [Validators.required]],
        sensorTypeId: [this.data.sensorTypeId, [Validators.required]],
        stationId: [this.data.stationId, [Validators.required]],
      });
    } else {
      this.sensorForm = this.formBuilder.group({
        upperLimit: ['', [Validators.required, Validators.pattern(this.decimalNumberRegex)]],
        lowerLimit: ['', [Validators.required, Validators.pattern(this.decimalNumberRegex)]],
        description: ['', [Validators.required]],
        sensorTypeId: ['', [Validators.required]],
        stationId: ['', [Validators.required]],
      });
    }
  }

  async newSensor() {
    console.log(this.sensorForm.value)
    if (this.sensorForm.valid) {
      console.log(this.sensorForm.value);
      const newSensor = {
        upperLimit: this.sensorForm.value.upperLimit,
        lowerLimit: this.sensorForm.value.lowerLimit,
        description: this.sensorForm.value.description,
        sensorTypeId: this.sensorForm.value.sensorTypeId,
        stationId: this.sensorForm.value.stationId
      };
      try {
        this.loading = true;
        await this.apiSensorsService.addNewSensor(newSensor);
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error creating new sensor', '', {
          duration: 2000
        });
      }
    } else {
      this.snackBar.open('Please input valid sensor type information', '', {
        duration: 2000
      });
    }

  }

  async updateSensor() {
    if (this.sensorForm.valid) {
      console.log(this.sensorForm.value);
      const updatedSensor = {
        upperLimit: this.sensorForm.value.upperLimit,
        lowerLimit: this.sensorForm.value.lowerLimit,
        description: this.sensorForm.value.description,
        sensorTypeId: this.sensorForm.value.sensorTypeId,
        stationId: this.sensorForm.value.stationId
      };
      try {
        this.loading = true;
        await this.apiSensorsService.updateSensor(this.data.id, updatedSensor)
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error updating sensor', '', {
          duration: 2000
        });
      }
    } else {
      this.snackBar.open('Please input valid sensor information', '', {
        duration: 2000
      });
    }
  }

}
