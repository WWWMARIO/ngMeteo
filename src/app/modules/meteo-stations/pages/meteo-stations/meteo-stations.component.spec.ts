import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { MeteoStationsComponent } from './meteo-stations.component';

describe('MeteoStationsComponent', () => {
  let component: MeteoStationsComponent;
  let fixture: ComponentFixture<MeteoStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ MeteoStationsComponent ],
      providers: [
        // { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header', () => {
    let header = fixture.debugElement.query(By.css('.header')).nativeElement
    expect(header.textContent).toContain('International Education Program Veleri-OI IoT School');
  });

  it('should contain subheader', () => {
    let subheader = fixture.debugElement.query(By.css('.subheader')).nativeElement
    expect(subheader.textContent).toContain('Case study of the IoT project "Cov protect System');
  });

  it('should contain "new" button', () => {
    let btn = fixture.debugElement.query(By.css('#newBtn'))
    expect(btn).toBeTruthy();
  });

  it('runs "new" when on new button is clicked', fakeAsync(() => {
    spyOn(component, 'onNew');
    let btn = fixture.debugElement.query(By.css('#newBtn')).nativeElement;
    btn.click();
    tick();
    expect(component.onNew).toHaveBeenCalled();
  }));

  it('should contain link to map', () => {
    let link = fixture.debugElement.query(By.css('#mapLink'))
    expect(link).toBeTruthy();
  });

  it('should contain link to stations', () => {
    let link = fixture.debugElement.query(By.css('#listLink'))
    expect(link).toBeTruthy();
  });
});
