import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { SensorsComponent } from './sensors.component';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ SensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain NEW SENSOR button', () => {
    let btn = fixture.debugElement.query(By.css('#newBtn'))
    expect(btn).toBeTruthy();
  });

  it('should contain sensors list', () => {
    let sensorsList = fixture.debugElement.query(By.css('app-sensors-list'))
    expect(sensorsList).toBeTruthy();
  });

  it('should contain sensor types list', () => {
    let sensorTypeList = fixture.debugElement.query(By.css('app-sensor-types-list'))
    expect(sensorTypeList).toBeTruthy();
  });


});
