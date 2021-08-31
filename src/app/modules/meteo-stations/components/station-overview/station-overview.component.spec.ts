import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

import { StationOverviewComponent } from './station-overview.component';

describe('StationOverviewComponent', () => {
  let component: StationOverviewComponent;
  let fixture: ComponentFixture<StationOverviewComponent>;

  const testReadings = [
    {
      "timeStamp": {
        "seconds": 1629839480,
        "nanoseconds": 0
      },
      "value": 48.11322,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "4MNWUK4jinCY1VbFIeFy"
    },
    {
      "timeStamp": {
        "seconds": 1629740859,
        "nanoseconds": 0
      },
      "value": 50.12436,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "6RGnLu2BO8VtdNWnelAN"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "value": 48.0766,
      "id": "DIsTeqhbcXczmNEjYBGM"
    },
    {
      "value": 53.43252,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629877745,
        "nanoseconds": 0
      },
      "id": "FDLprwZ2UFwJ113ZruYA"
    },
    {
      "value": 46.97337,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629660320,
        "nanoseconds": 0
      },
      "id": "PSn5vJCQHrvSV8GuHqbD"
    },
    {
      "timeStamp": {
        "seconds": 1629835880,
        "nanoseconds": 0
      },
      "value": 48.00336,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "PiRmtWRbOaCZN5LWsykg"
    },
    {
      "value": 47.43725,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629750417,
        "nanoseconds": 0
      },
      "id": "bNd9J6Sj3IoTSmeJnS3T"
    },
    {
      "value": 49.61623,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629663942,
        "nanoseconds": 0
      },
      "id": "hLZqXOI2LUkAveBayItA"
    },
    {
      "timeStamp": {
        "seconds": 1629744459,
        "nanoseconds": 0
      },
      "value": 47.62799,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "jgGrAdcKgOctJMVgztBN"
    },
    {
      "value": 46.70787,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629660342,
        "nanoseconds": 0
      },
      "id": "kHbcVf2J0a4DXHjsQtZ6"
    },
    {
      "timeStamp": {
        "seconds": 1629746817,
        "nanoseconds": 0
      },
      "value": 47.56542,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "ufq4vOOHiTLTT2pX3iam"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      // SharedModule,
      //AppRoutingModule,
      //BrowserAnimationsModule
    ],
      declarations: [ StationOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain imgcard ', () => {
    let card = fixture.debugElement.query(By.css('#imgCard'))
    expect(card).toBeTruthy();
  });

  it('should contain detailsCard ', () => {
    let card = fixture.debugElement.query(By.css('#detailsCard'))
    expect(card).toBeTruthy();
  });

  it('should contain readingsCard ', () => {
    component.readings$ = new BehaviorSubject(testReadings)
    fixture.detectChanges();
    let card = fixture.debugElement.query(By.css('#readingsCard'))
    expect(card).toBeTruthy();
  });
});
