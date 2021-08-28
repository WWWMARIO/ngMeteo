import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { EditSensorModalComponent } from './edit-sensor-modal.component';

describe('EditSensorModalComponent', () => {
  let component: EditSensorModalComponent;
  let fixture: ComponentFixture<EditSensorModalComponent>;

  const completeSensorData = {
    "description": "Vlažnost zraka",
    "upperLimit": 100,
    "stationId": "CQ9r2n0yXxrgX5RGFr1E",
    "sensorTypeId": "lxyiTDDs1kPSiOqpF1sV",
    "lowerLimit": 0,
    "id": "G4sLf9DOaxBOmjGLmDU8"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      BrowserAnimationsModule
    ],
      declarations: [ EditSensorModalComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
       { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSensorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Sensor form should be valid when all inputs are correct', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('10');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('20');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeFalsy();
  });

  it('Sensor form should be invalid when lower limit is not set', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('20');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });

  it('Sensor form should be invalid when upper limit is not set', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('10');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });

  it('Sensor form should be invalid when description is not set', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('10');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('20');
    const description = component.sensorForm.controls.description;
    description.setValue('');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });

  it('Sensor form should be invalid when sensor type id is not set', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('10');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('20');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });

  it('Sensor form should be invalid when station id is not set', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('10');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('20');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });

  it('Sensor form should be invalid when lower limit is not numeric not set', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('xyz');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('20');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });

  it('Sensor form should be invalid when upper limit is not numeric', () => {
    const lowerLimit = component.sensorForm.controls.lowerLimit;
    lowerLimit.setValue('10');
    const upperLimit = component.sensorForm.controls.upperLimit;
    upperLimit.setValue('xyz');
    const description = component.sensorForm.controls.description;
    description.setValue('Stanica druga Temp');
    const sensorTypeId = component.sensorForm.controls.sensorTypeId;
    sensorTypeId.setValue('31wLXK7Bg59pXvVikvgO');
    const stationId = component.sensorForm.controls.stationId;
    stationId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.sensorForm.invalid).toBeTruthy();
  });


  it('should contain "update sensor" button when editing sensor', () => {
    component.data = completeSensorData;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'))
    expect(btn).toBeTruthy();
  });

  it('should contain "update sensor" button when editing sensor', () => {
    component.data = completeSensorData;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'))
    expect(btn).toBeTruthy();
  });


  it('should contain "create new sensor" button when no data is inputed', () => {
    component.data = null;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'))
    expect(btn).toBeTruthy();
  });





});
