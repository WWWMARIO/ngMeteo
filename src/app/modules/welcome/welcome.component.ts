import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "src/app/core/login/login.component";
/* import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'; */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

   login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      });
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /*logout() {
    this.auth.signOut();
  } */

}
