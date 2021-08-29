import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BehaviorSubject } from "rxjs";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { StationReadingsComponent } from './station-readings.component';

describe('StationReadingsComponent', () => {
  let component: StationReadingsComponent;
  let fixture: ComponentFixture<StationReadingsComponent>;
  const testSensors = [
    {
      "description": "Vlažnost zraka",
      "upperLimit": 100,
      "stationId": "CQ9r2n0yXxrgX5RGFr1E",
      "sensorTypeId": "lxyiTDDs1kPSiOqpF1sV",
      "lowerLimit": 0,
      "id": "G4sLf9DOaxBOmjGLmDU8"
    },
    {
      "lowerLimit": 9000,
      "sensorTypeId": "R28NgTu7xvjfUwfZyZk2",
      "upperLimit": 11000,
      "description": "Tlak zraka",
      "stationId": "CQ9r2n0yXxrgX5RGFr1E",
      "id": "J2WEQArcfOdR67NrhcVE"
    },
    {
      "stationId": "CQ9r2n0yXxrgX5RGFr1E",
      "sensorTypeId": "OX0leozGhNSo16rKuRxt",
      "description": "UV index",
      "lowerLimit": 0,
      "upperLimit": 50,
      "id": "LY9xZ38Jq0iM1A4N2QZy"
    },
    {
      "description": "Temperatura zraka",
      "lowerLimit": 0,
      "upperLimit": 50,
      "stationId": "CQ9r2n0yXxrgX5RGFr1E",
      "sensorTypeId": "uyvDZzISG2iKybntKVwT",
      "id": "j6jMOYDm3QJLkHrIrSLw"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule,
        //AppRoutingModule,
        BrowserAnimationsModule
      ],
      declarations: [ StationReadingsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows 4 expansion panels when there are 4 sensors', () => {
    component.sensors$ = new BehaviorSubject(testSensors)
    fixture.detectChanges();
    let acordions = fixture.debugElement.queryAll(By.css('mat-expansion-panel'))
    expect(acordions.length).toEqual(4);
  });
});
