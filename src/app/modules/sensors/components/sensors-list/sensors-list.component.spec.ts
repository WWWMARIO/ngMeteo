import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { BehaviorSubject } from "rxjs";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { SensorsListComponent } from './sensors-list.component';



describe('SensorsListComponent', () => {
  let component: SensorsListComponent;
  let fixture: ComponentFixture<SensorsListComponent>;

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

  const testSensorTypes = [
    {
      "type": "UV",
      "unit": " ",
      "id": "OX0leozGhNSo16rKuRxt"
    },
    {
      "unit": "hPa",
      "type": "Tlak zraka",
      "id": "R28NgTu7xvjfUwfZyZk2"
    },
    {
      "type": "Vlaga",
      "unit": "%",
      "id": "lxyiTDDs1kPSiOqpF1sV"
    },
    {
      "unit": "°C",
      "type": "Temperatura",
      "id": "uyvDZzISG2iKybntKVwT"
    }
  ]

  const testStations = [
    {
      "geoLocation": {
        "latitude": 45.488233436133974,
        "longitude": 15.549242313541042
      },
      "description": "Druga meteo stanica",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "name": "Karlovac",
      "id": "6BlqNNrpO4LEoFzlFA6B"
    },
    {
      "name": "Rijeka",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "geoLocation": {
        "latitude": 45.33398223570999,
        "longitude": 14.441820405013445
      },
      "description": "Rijeka",
      "id": "CQ9r2n0yXxrgX5RGFr1E"
    },
    {
      "description": "Cetvrta",
      "geoLocation": {
        "latitude": 45.81317957211123,
        "longitude": 15.97728732804345
      },
      "name": "Zagreb",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "id": "KZm1vypYk5NlCiDu1zmn"
    },
    {
      "description": "Treca meteo stanica",
      "name": "Pula",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "geoLocation": {
        "latitude": 44.87344276828821,
        "longitude": 13.85018142543744
      },
      "id": "oatSmuxz3x6Xn0sUlIH8"
    }
  ]


  beforeEach(async () => {


    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ SensorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains six columns', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))
    expect(col.length).toEqual(6);
  });

  it('column 1 is "lower limit', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[0].nativeElement
    expect(col.textContent).toContain('Lower limit');
  });

  it('column 2 is "Upper limit"', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[1].nativeElement
    expect(col.textContent).toContain('Upper limit');
  });


  it('column 3 is "Description', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[2].nativeElement
    expect(col.textContent).toContain('Description');
  });

  it('column 4 is "Sensor type', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[3].nativeElement
    expect(col.textContent).toContain('Sensor type');
  });

  it('column 5 is "Sensor id', () => {
    let col = fixture.debugElement.queryAll(By.css('th'))[4].nativeElement
    expect(col.textContent).toContain('Sensor id');
  });


  it('displays 4 rows when testdata of len 4 is input', () => {
    component.stations$ = new BehaviorSubject(testStations)
    component.sensorTypes$ = new BehaviorSubject(testSensorTypes)
    component.dataSource.data = testSensors
    fixture.detectChanges();
    let rows = fixture.debugElement.queryAll(By.css('tr'))
    expect(rows.length).toEqual(5);
  });

});






/* it('contains five chips when input testdata of 4 elements', () => {
  component.sensorTypes$ = new BehaviorSubject(testData)
  fixture.detectChanges();
  let view = fixture.debugElement.queryAll(By.css('mat-chip'))
  expect(view.length).toEqual(5);
});
 */


/* it('runs "editSensorType" when "edit sensor" button clicked', fakeAsync(() => {
  spyOn(component, 'editSensorType');
  component.sensorTypes$ = new BehaviorSubject(testData)
  fixture.detectChanges();
  let btn = fixture.debugElement.queryAll(By.css('mat-chip'))[1].nativeElement
  btn.click();
  tick(500);
  expect(component.editSensorType).toHaveBeenCalled();
})); */

/* it('should contain header', () => {
  let header = fixture.debugElement.query(By.css('h1')).nativeElement
  expect(header.textContent).toContain('Meteo station');
  expect(header).toBeTruthy();
}); */
