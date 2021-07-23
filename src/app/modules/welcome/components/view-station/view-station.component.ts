import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.scss']
})
export class ViewStationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
