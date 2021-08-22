import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  // submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginComponent>,
    private auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  }


  async onLogIn() {
    this.loading = true;
    try {
      await this.auth.signInWithEmailAndPassword(this.logInForm.value.email, this.logInForm.value.password)
      this.dialogRef.close();
      this.router.navigate(['/map']);
    } catch (err) {
      this.loading = false;
      this.dialogRef.close();
      this.snackBar.open('Invalid username or password', '', {
        duration: 3000
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
