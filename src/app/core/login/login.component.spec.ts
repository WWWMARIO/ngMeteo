import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { environment } from 'src/environments/environment';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
      ],
      declarations: [LoginComponent],
      providers: [
        // { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain e-mail input', () => {
    let emailInput = fixture.debugElement.query(By.css('#emailInput'));
    expect(emailInput).toBeTruthy();
  });

  it('should contain password input', () => {
    let passwordInput = fixture.debugElement.query(By.css('#passwordInput'));
    expect(passwordInput).toBeTruthy();
  });

  it('should contain login button', () => {
    let loginButton = fixture.debugElement.query(By.css('#loginBtn'));
    expect(loginButton).toBeTruthy();
  });

  it('should contain cancel button', () => {
    let cancelButton = fixture.debugElement.query(By.css('#cancelBtn'));
    expect(cancelButton).toBeTruthy();
  });

  it('form should be invalid when not inputing email and password', () => {
    const email = component.logInForm.controls.email;
    email.setValue('');
    const password = component.logInForm.controls.password;
    password.setValue('');
    expect(component.logInForm.invalid).toBeTruthy();
  });

  it('Submit button should be disabled when form is invalid', () => {
    expect(component.logInForm.invalid).toBeTruthy();
    let loginButton = fixture.debugElement.query(By.css('button[type=submit]'));
    expect(loginButton.nativeElement.disabled).toBeTruthy();
  });



  it('form should be invalid when not inputing email', () => {
    const password = component.logInForm.controls.password;
    password.setValue('123456');
    expect(component.logInForm.invalid).toBeTruthy();
  });

  it('form should be invalid when not inputing password', () => {
    const email = component.logInForm.controls.email;
    email.setValue('test@test.com');
    expect(component.logInForm.invalid).toBeTruthy();
  });

  it('form should be invalid when inputing invalid email and valid password', () => {
    const email = component.logInForm.controls.email;
    email.setValue('testtest.com');
    const password = component.logInForm.controls.password;
    password.setValue('123456');
    expect(component.logInForm.invalid).toBeTruthy();
  });

  it('form should be valid when inputing email and password', () => {
    const email = component.logInForm.controls.email;
    email.setValue('test@test.com');
    const password = component.logInForm.controls.password;
    password.setValue('123456');
    expect(component.logInForm.valid).toBeTruthy();
  });


  it('Submit button should be enabled when form is valid', () => {
    const email = component.logInForm.controls.email;
    email.setValue('test@test.com');
    const password = component.logInForm.controls.password;
    password.setValue('123456');
    fixture.detectChanges();
    expect(component.logInForm.valid).toBeTruthy();
    let loginButton = fixture.debugElement.query(By.css('button[type=submit]'));
    expect(loginButton.nativeElement.disabled).toBeFalsy();
  });

  it('runs login function when form is filled and login button is clicked', fakeAsync(() => {
    const email = component.logInForm.controls.email;
    email.setValue('test@test.com');
    const password = component.logInForm.controls.password;
    password.setValue('123456');
    fixture.detectChanges();
    spyOn(component, 'onLogIn');
    let loginButton = fixture.debugElement.query(By.css('#loginBtn')).nativeElement;
    loginButton.click();
    tick();
    expect(component.onLogIn).toHaveBeenCalled();
  }));

  it('cancels when on cancel button is clicked', fakeAsync(() => {
    spyOn(component, 'onCancel');
    let btn = fixture.debugElement.query(By.css('#cancelBtn')).nativeElement;
    btn.click();
    tick();
    expect(component.onCancel).toHaveBeenCalled();
  }));
});
