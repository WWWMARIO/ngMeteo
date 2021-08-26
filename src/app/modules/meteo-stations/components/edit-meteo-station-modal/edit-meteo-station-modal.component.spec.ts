import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment.prod";

import { EditMeteoStationModalComponent } from './edit-meteo-station-modal.component';

describe('EditMeteoStationModalComponent', () => {
  let component: EditMeteoStationModalComponent;
  let fixture: ComponentFixture<EditMeteoStationModalComponent>;
  let completeStationData = {
    "name": "druga stanica",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
    "description": "druga meteo stanica",
    "geoLocation": {
      "longitude": 22,
      "latitude": 22
    },
    "id": "6BlqNNrpO4LEoFzlFA6B"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      BrowserAnimationsModule
    ],
      declarations: [ EditMeteoStationModalComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeteoStationModalComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid when inputing full station data', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Prva stanica');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeTruthy();
  });

  it('form should not be be valid when not inputing station name', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when not inputing station image url', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when not inputing station description', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when not inputing longitude ', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(null);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when not inputing latitude ', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(null);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when inputing invalid logitude ', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(200);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when inputing string as logitude ', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue('string');
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when inputing string as latitude ', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue('string');
    expect(component.meteoStationForm.valid).toBeFalsy();
  });

  it('form should not be be valid when inputing invalid latitude ', () => {
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Ime');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(200);
    expect(component.meteoStationForm.valid).toBeFalsy();
  });





  it('should contain "update station" button when editing station button', () => {
    component.data = completeStationData;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateMeteoStation'))
    expect(btn).toBeTruthy();
  });

  it('should not contain "create new station" button when station data is inputed', () => {
    component.data = completeStationData;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewMeteoStation'))
    expect(btn).toBeFalsy();
  });

  it('should contain "create new station" button when no station data is inputed', () => {
    component.data = null;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewMeteoStation'))
    expect(btn).toBeTruthy();
  });

  it('should contain "create new station" button when only latitude and logitude is inputed', () => {
    component.data = {
        "longitude": 22,
        "latitude": 22
      }
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewMeteoStation'))
    expect(btn).toBeTruthy();
  });

  it('should contain "delete station" button when station data is inputed', () => {
    component.data = completeStationData;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#deleteMeteoStation'))
    expect(btn).toBeTruthy();
  });

  it('should not contain "delete station" button when station data is not inputed', () => {
    component.data = null;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#deleteMeteoStation'))
    expect(btn).toBeFalsy();
  });

  it('should contain header', () => {
    let header = fixture.debugElement.query(By.css('h1')).nativeElement
    expect(header.textContent).toContain('Meteo station');
    expect(header).toBeTruthy();
  });

  it('runs update when update button is clicked', fakeAsync(() => {
    component.data = completeStationData;
    fixture.detectChanges();
    spyOn(component, 'updateStation');
    let button = fixture.debugElement.query(By.css('#updateMeteoStation')).nativeElement;
    button.click();
    tick();
    expect(component.updateStation).toHaveBeenCalled();
  }));

  it('runs create new station when creatne new button is clicked', fakeAsync(() => {
    component.data = null;
    fixture.detectChanges();
    const name = component.meteoStationForm.controls.name;
    name.setValue('Prva stanica');
    const imageUrl = component.meteoStationForm.controls.imageUrl;
    imageUrl.setValue('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg');
    const description = component.meteoStationForm.controls.description;
    description.setValue('Prva meteo stanica');
    const longitude = component.meteoStationForm.controls.longitude;
    longitude.setValue(50);
    const latitude = component.meteoStationForm.controls.latitude;
    latitude.setValue(50);
    fixture.detectChanges();
    console.log(component.meteoStationForm)
    spyOn(component, 'newStation');
    let button = fixture.debugElement.query(By.css('#createNewMeteoStation')).nativeElement;
    button.click();
    tick();
    expect(component.newStation).toHaveBeenCalled();
  }));

  it('runs delete when on delete button is clicked', fakeAsync(() => {
    component.data = completeStationData;
    fixture.detectChanges();
    spyOn(component, 'onDelete');
    let btn = fixture.debugElement.query(By.css('#deleteMeteoStation')).nativeElement;
    btn.click();
    tick();
    expect(component.onDelete).toHaveBeenCalled();
  }));





}
);



