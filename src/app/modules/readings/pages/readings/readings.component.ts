import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { EditReadingsComponent } from "../../components/edit-readings/edit-readings.component";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {
  readings$: Observable<any[]>;
  constructor(
    private firestore: AngularFirestore,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.readings$ = this.firestore.collection('readings').valueChanges({ idField: 'id' });
  }

  onNew() {
    const dialogRef = this.dialog.open(EditReadingsComponent, {
      //height: '90%',
      width: '90%'
    });
    /* dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); */
  }

}
