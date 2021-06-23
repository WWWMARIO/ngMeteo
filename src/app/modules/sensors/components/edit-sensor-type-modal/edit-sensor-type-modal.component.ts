import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from "@angular/material/snack-bar";


export class SensorType {
  id: string;
  type: string;
  unit:string;
}

@Component({
  selector: 'app-edit-sensor-type-modal',
  templateUrl: './edit-sensor-type-modal.component.html',
  styleUrls: ['./edit-sensor-type-modal.component.scss']
})
export class EditSensorTypeModalComponent implements OnInit {
  sensorTypeForm: FormGroup;
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SensorType,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private dialogRef: MatDialogRef<EditSensorTypeModalComponent>,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
      this.sensorTypeForm = this.formBuilder.group({
        type: [this.data.type, [Validators.required]],
        unit: [this.data.unit, [Validators.required]]
      });
    } else {
      this.sensorTypeForm = this.formBuilder.group({
        type: ['', [Validators.required]],
        unit: ['', [Validators.required]]
      });
    }
  }

 /*  newSensorType() {
    console.log(this.sensorTypeForm.value)
  } */

  async newSensorType() {
    if (this.sensorTypeForm.valid) {
      console.log(this.sensorTypeForm.value);
      const newSensorType = {
        type: this.sensorTypeForm.value.type,
        unit: this.sensorTypeForm.value.unit
      };
      try {
        this.loading = true;
        await this.firestore.collection('sensorTypes').add(newSensorType);
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error creating new meteo station', '', {
          duration: 2000
        });
      }
    } else {
      this.snackBar.open('Please input valid sensor type information', '', {
        duration: 2000
      });
    }
  }

  async updateSensorType() {
    if (this.sensorTypeForm.valid) {
      console.log(this.sensorTypeForm.value);
      const updatedSensorType = {
        type: this.sensorTypeForm.value.type,
        unit: this.sensorTypeForm.value.unit
      };
      try {
        this.loading = true;
        await this.firestore.collection('sensorTypes').doc(this.data.id).update(updatedSensorType);
        this.dialogRef.close();
      } catch (err) {
        this.snackBar.open('Error creating new meteo station', '', {
          duration: 2000
        });
      }
    } /*else {
      this.snackBar.open('Please input valid sensor type information', '', {
        duration: 2000
      });
    }*/
  }

}
