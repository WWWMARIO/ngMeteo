import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { EditSensorTypeModalComponent } from './edit-sensor-type-modal.component';

describe('EditSensorTypeModalComponent', () => {
  let component: EditSensorTypeModalComponent;
  let fixture: ComponentFixture<EditSensorTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      BrowserAnimationsModule
    ],
      declarations: [ EditSensorTypeModalComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSensorTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when not inputing type and unit', () => {
    const type = component.sensorTypeForm.controls.type;
    type.setValue('');
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('');
    expect(component.sensorTypeForm.invalid).toBeTruthy();
  });

  it('form should be invalid when not inputing type', () => {
    const type = component.sensorTypeForm.controls.type;
    type.setValue('');
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('kph');
    expect(component.sensorTypeForm.invalid).toBeTruthy();
  });

  it('form should be invalid when not inputing unit', () => {
    const type = component.sensorTypeForm.controls.type;
    type.setValue('Pressure');
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('');
    expect(component.sensorTypeForm.invalid).toBeTruthy();
  });

  it('form should be valid when inputing type and unit', () => {
    const type = component.sensorTypeForm.controls.type;
    type.setValue('Pressure');
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('hPa');
    expect(component.sensorTypeForm.valid).toBeTruthy();
  });

  it('UPDATE button should be created if component is in update mode', (() => {
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      type: 'speed',
      unit: 'kph'
    }
    fixture.detectChanges();
     let btn = fixture.debugElement.query(By.css('#updateBtn'));
    expect(btn).toBeTruthy();
  }));

  it('CREATE NEW button should be created if component is in create new mode', (() => {
    component.data = undefined;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'))
    expect(btn).toBeTruthy();
  }));



  it('CREATE NEW button should be enabled when form is valid', (() => {
    component.data = undefined;
    const type = component.sensorTypeForm.controls.type;
    type.setValue('Pressure');
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('hPa');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'))
    expect(btn.nativeElement.disabled).toBeFalsy();
  }));

  it('CREATE NEW button should be disabled when form is invalid', (() => {
    component.data = undefined;
    const type = component.sensorTypeForm.controls.type;
    type.setValue('');
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('hPa');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'))
    expect(btn.nativeElement.disabled).toBeTruthy();
  }));


  it('UPDATE button should be enabled when form is valid', (() => {
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      type: 'speed',
      unit: 'kph'
    }
    const type = component.sensorTypeForm.controls.type;
    type.setValue(component.data.type);
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue(component.data.unit);
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'))
    expect(btn.nativeElement.disabled).toBeFalsy();
  }));

  it('UPDATE button should be disabled when form is invalid', (() => {
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      type: 'speed',
      unit: 'kph'
    }
    const type = component.sensorTypeForm.controls.type;
    type.setValue(component.data.type);
    const unit = component.sensorTypeForm.controls.unit;
    unit.setValue('');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'))
    expect(btn.nativeElement.disabled).toBeTruthy();
  }));

});
