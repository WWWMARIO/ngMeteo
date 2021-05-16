import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ConfirmDeleteModalComponent } from "src/app/modules/shared/components/confirm-delete-modal/confirm-delete-modal.component";
import { EditSensorTypeModalComponent } from "../edit-sensor-type-modal/edit-sensor-type-modal.component";

@Component({
  selector: 'app-sensor-types-list',
  templateUrl: './sensor-types-list.component.html',
  styleUrls: ['./sensor-types-list.component.scss']
})
export class SensorTypesListComponent implements OnInit {
  selectable = true;
  removable = true;

  sensorTypes$: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sensorTypes$ = this.firestore.collection('sensorTypes').valueChanges({ idField: 'id' });
  }


  editSensorType(sensorType) {
    console.log(sensorType)
    const dialogRef = this.dialog.open(EditSensorTypeModalComponent, {
      data:  sensorType,
      // height: '90%',
      width: '90%',
    });
  }

  onNew() {
    const dialogRef = this.dialog.open(EditSensorTypeModalComponent, {
      // height: '90%',
      width: '90%',
    });
    /* dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); */
  }

  onRemove(sensorType) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      // height: '90%',
      // width: '90%',
    });
    dialogRef.afterClosed().subscribe((confirmDelete: boolean) => {
      if (confirmDelete) {
        this.firestore.collection('sensorTypes').doc(sensorType.id).delete();
      }
    });
  }
}
