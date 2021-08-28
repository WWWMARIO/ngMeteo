import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { BehaviorSubject } from "rxjs";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { SensorTypesListComponent } from './sensor-types-list.component';

describe('SensorTypesListComponent', () => {
  let component: SensorTypesListComponent;
  let fixture: ComponentFixture<SensorTypesListComponent>;

  const testData = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ SensorTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains "new type" button', () => {
    let btn = fixture.debugElement.query(By.css('#newType'))
    expect(btn).toBeTruthy();
  });

  it('runs "new" when "new" button clicked', fakeAsync(() => {
    spyOn(component, 'onNew');
    let btn = fixture.debugElement.query(By.css('#newType')).nativeElement;
    btn.click();
    expect(btn).toBeTruthy();
    tick();
    expect(component.onNew).toHaveBeenCalled();
  }));


  it('contains one chip when no data', () => {
    let view = fixture.debugElement.queryAll(By.css('mat-chip'))
    expect(view.length).toEqual(1);
  });

  it('contains five chips when input testdata of 4 elements', () => {
    component.sensorTypes$ = new BehaviorSubject(testData)
    fixture.detectChanges();
    let view = fixture.debugElement.queryAll(By.css('mat-chip'))
    expect(view.length).toEqual(5);
  });

  it('first chip contains text "UV" when inputing testdata', () => {
    component.sensorTypes$ = new BehaviorSubject(testData)
    fixture.detectChanges();
    let view = fixture.debugElement.queryAll(By.css('mat-chip'))
    expect(view[1].nativeElement.textContent).toContain('UV');
  });

  it('runs "editSensorType" when "edit sensor" button clicked', fakeAsync(() => {
    spyOn(component, 'editSensorType');
    component.sensorTypes$ = new BehaviorSubject(testData)
    fixture.detectChanges();
    let btn = fixture.debugElement.queryAll(By.css('mat-chip'))[1].nativeElement
    btn.click();
    tick(500);
    expect(component.editSensorType).toHaveBeenCalled();
  }));

  it('second chip contains text "Tlak zraka" when inputing testdata', () => {
    component.sensorTypes$ = new BehaviorSubject(testData)
    fixture.detectChanges();
    let view = fixture.debugElement.queryAll(By.css('mat-chip'))
    expect(view[2].nativeElement.textContent).toContain('Tlak zraka');
  });

  it('third chip contains text "Vlaga" when inputing testdata', () => {
    component.sensorTypes$ = new BehaviorSubject(testData)
    fixture.detectChanges();
    let view = fixture.debugElement.queryAll(By.css('mat-chip'))
    expect(view[3].nativeElement.textContent).toContain('Vlaga');
  });

  it('fpurth chip contains text "Temperatura" when inputing testdata', () => {
    component.sensorTypes$ = new BehaviorSubject(testData)
    fixture.detectChanges();
    let view = fixture.debugElement.queryAll(By.css('mat-chip'))
    expect(view[4].nativeElement.textContent).toContain('Temperatura');
  });


});






