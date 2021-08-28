import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, Subscription } from "rxjs";
import { ConfirmDeleteModalComponent } from "src/app/modules/shared/components/confirm-delete-modal/confirm-delete-modal.component";
import { EditReadingsComponent } from "../edit-readings/edit-readings.component";

@Component({
  selector: 'app-readings-list',
  templateUrl: './readings-list.component.html',
  styleUrls: ['./readings-list.component.scss']
})
export class ReadingsListComponent implements OnInit {
  @Input() readings$: Observable<any[]>;
  @Input() sensorId: string;
  @ViewChild(MatSort) sort: MatSort;
  readingsSub: Subscription;

  dataSource = new MatTableDataSource([]);

  displayedColumns: string[] = [
    'value',
    'timeStamp',
    'sensorId',
    'details'
  ];

  constructor(
    private dialog: MatDialog,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // this.apiItemsService.getItems().subscribe();
    this.readingsSub = this.readings$.subscribe((response: any[]) => {
      if (this.sensorId) {
        this.dataSource.data =  response.filter((reading)=> {
          return reading.sensorId === this.sensorId
        })
      } else {
        this.dataSource.data = response;
      }

      this.dataSource.sort = this.sort;
    });
  }

  onEditReading(reading) {
    const dialogRef = this.dialog.open(EditReadingsComponent, {
      //height: '90%',
      width: '90%',
      data: reading
    });
    /* dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); */
  }

  deleteReading(reading) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      // height: '90%',
      // width: '90%',
    });
    dialogRef.afterClosed().subscribe((confirmDelete: boolean) => {
      if (confirmDelete) {
        this.firestore.collection('readings').doc(reading.id).delete();
      }
    });
  }



  ngOnDestroy() {
    this.readingsSub.unsubscribe();
  }

}
