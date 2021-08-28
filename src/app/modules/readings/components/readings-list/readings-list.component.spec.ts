import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { Subject } from "rxjs";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { ReadingsListComponent } from './readings-list.component';

describe('ReadingsListComponent', () => {
  let component: ReadingsListComponent;
  let fixture: ComponentFixture<ReadingsListComponent>;

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
    await TestBed.configureTestingModule({ imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      //BrowserAnimationsModule
    ],
      declarations: [ ReadingsListComponent ],
      /* providers: [
        // { provide: MAT_DIALOG_DATA, useValue: {} },
        // { provide: MatDialogRef, useValue: {} }
      ], */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsListComponent);
    component = fixture.componentInstance;
    component.readings$ = new Subject(); // TODO
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains three columns', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))
    expect(col.length).toEqual(3);
  });

  it('column 1 is "Value', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[0].nativeElement
    expect(col.textContent).toContain('Value');
  });

  it('column 2 is "Datetime"', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[1].nativeElement
    expect(col.textContent).toContain('Datetime');
  });


  it('displays 11 rows when testdata of len 11 is input', fakeAsync(() => {
    component.dataSource.data = testReadings
    fixture.detectChanges();
    tick();
    let rows = fixture.debugElement.queryAll(By.css('tr'))
    expect(rows.length).toEqual(12);
  }));


});
