import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        BrowserAnimationsModule,
      ],
      declarations: [EditReadingsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Reading form should be invalid when not inputing value and sensor id', () => {
    component.createForm(-999999999, 999999999);
    const value = component.readingForm.controls.value;
    value.setValue('');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('Reading form should be valid when inputing both value and sensor id', () => {
    component.createForm(-999999999, 999999999);
    const value = component.readingForm.controls.value;
    value.setValue('20');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeFalsy();
  });

  it('Reading form should be invalid when not inputing sensor id', () => {
    component.createForm(-999999999, 999999999);
    const value = component.readingForm.controls.value;
    value.setValue('20');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('Reading form should be invalid when input is not number', () => {
    component.createForm(-999999999, 999999999);
    const value = component.readingForm.controls.value;
    value.setValue('xyz');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    // console.log(component.readingForm)
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('CREATE NEW button should be enabled when form is valid', () => {
    component.createForm(-999999999, 999999999);
    component.data.newReadingSensorid = '31wLXK7Bg59pXvVikvgO';
    const value = component.readingForm.controls.value;
    value.setValue('123');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'));
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  it('CREATE NEW button should be disabled when form is invalid', () => {
    component.createForm(-999999999, 999999999);
    component.data.newReadingSensorid = '31wLXK7Bg59pXvVikvgO';
    const value = component.readingForm.controls.value;
    value.setValue('');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#createNewBtn'));
    expect(btn.nativeElement.disabled).toBeTruthy();
  });

  it('UPDATE button should be enabled when form is valid', () => {
    component.createForm(-999999999, 999999999);
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      sensorId: '31wLXK7Bg59pXvVikvgO',
      value: 25,
    };
    const value = component.readingForm.controls.value;
    value.setValue(component.data.value);
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue(component.data.sensorId);
    fixture.detectChanges();
    console.log(component.readingForm);
    let btn = fixture.debugElement.query(By.css('#updateBtn'));
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  it('UPDATE button should be disabled when form is invalid', () => {
    component.createForm(-999999999, 999999999);
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      sensorId: '31wLXK7Bg59pXvVikvgO',
      value: 25,
    };
    const value = component.readingForm.controls.value;
    value.setValue(component.data.value);
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('');
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#updateBtn'));
    expect(btn.nativeElement.disabled).toBeTruthy();
  });

  it('Reading form should be valid when inputing value between min and max', () => {
    component.createForm(100, 120);
    const value = component.readingForm.controls.value;
    value.setValue('110');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.valid).toBeTruthy();
  });

  it('Reading form should be invalid when inputing value below minimum', () => {
    component.createForm(100, 120);
    const value = component.readingForm.controls.value;
    value.setValue('80');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('Reading form should be invalid when inputing value above maximum', () => {
    component.createForm(100, 120);
    const value = component.readingForm.controls.value;
    value.setValue('140');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });


  it('Reading form should be invalid when inputing string value', () => {
    component.createForm(0, 100);
    const value = component.readingForm.controls.value;
    value.setValue('reading');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });

  it('Reading form should be invalid when inputing no value', () => {
    component.createForm(0, 100);
    const value = component.readingForm.controls.value;
    value.setValue('');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue('31wLXK7Bg59pXvVikvgO');
    fixture.detectChanges();
    expect(component.readingForm.invalid).toBeTruthy();
  });



  it('CREATE NEW button should be shown when not inputing reading data', () => {
    component.createForm(0, 100);
    component.data.newReadingSensorid = '31wLXK7Bg59pXvVikvgO';
    const value = component.readingForm.controls.value;
    value.setValue('');
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue(component.data.newReadingSensorid);
    fixture.detectChanges();
    let createNewReadingButton = fixture.debugElement.query(By.css('#createNewBtn'));
    expect(createNewReadingButton).toBeTruthy();
  });

  it('UPDATE button should be shown when inputing reading data', () => {
    component.createForm(0, 100);
    component.data = {
      id: '31wLXK7Bg59pXvVikvgO',
      sensorId: '31wLXK7Bg59pXvVikvgO',
      value: 25,
    };
    const value = component.readingForm.controls.value;
    value.setValue(component.data.value);
    const sensorId = component.readingForm.controls.sensorId;
    sensorId.setValue(component.data.sensorId);
    fixture.detectChanges();
    let updateReadingButton = fixture.debugElement.query(By.css('#updateBtn'));
    expect(updateReadingButton).toBeTruthy();
  });
});
