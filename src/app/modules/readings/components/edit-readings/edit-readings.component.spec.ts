import { stringify } from "@angular/compiler/src/util";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { environment } from 'src/environments/environment';

import { EditReadingsComponent } from './edit-readings.component';

describe('EditReadingsComponent', () => {
  let component: EditReadingsComponent;
  let fixture: ComponentFixture<EditReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule,
        BrowserAnimationsModule
      ],
      declarations: [EditReadingsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Reading form should be invalid when not inputing value and sensor id', () => {
    const value = component.readingForm.controls.value;
    value.setValue('');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('Reading form should be valid when inputing both value and sensor id', () => {
    const value = component.readingForm.controls.value;
    value.setValue('20');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeFalsy();
  });

  it('Reading form should be invalid when not inputing sensor id', () => {
    const value = component.readingForm.controls.value;
    value.setValue('20');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('Reading form should be invalid when input is not number', () => {
    const value = component.readingForm.controls.value;
    value.setValue('xyz');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    // console.log(component.readingForm)
    expect(component.readingForm.invalid).toBeTruthy();
  });


  it('CREATE NEW button should be enabled when form is valid', (() => {
    component.data = undefined;
    const value = component.readingForm.controls.value;
    value.setValue('123');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'))
    expect(btn.nativeElement.disabled).toBeFalsy();
  }));

  it('CREATE NEW button should be disabled when form is invalid', (() => {
    component.data = undefined;
    const value = component.readingForm.controls.value;
    value.setValue('');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'))
    expect(btn.nativeElement.disabled).toBeTruthy();
  }));


 it('UPDATE button should be enabled when form is valid', (() => {
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      sensorId: '31wLXK7Bg59pXvVikvgO',
      value: 25
    }
    const value = component.readingForm.controls.value;
    value.setValue(component.data.value);
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue(component.data.sensorId);
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'))
    expect(btn.nativeElement.disabled).toBeFalsy();
  }));

  it('UPDATE button should be disabled when form is invalid', (() => {
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      sensorId: '31wLXK7Bg59pXvVikvgO',
      value: 25
    }
    const value = component.readingForm.controls.value;
    value.setValue(component.data.value);
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'))
    expect(btn.nativeElement.disabled).toBeTruthy();
  }));


});
