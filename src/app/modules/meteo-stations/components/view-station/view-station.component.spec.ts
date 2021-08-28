import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { ViewStationComponent } from './view-station.component';

describe('ViewStationComponent', () => {
  let component: ViewStationComponent;
  let fixture: ComponentFixture<ViewStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      AngularFirestoreModule,
      //AppRoutingModule,
      BrowserAnimationsModule
    ],
      declarations: [ ViewStationComponent
       ],
       providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain overviw if toggle is overview', () => {
    component.viewType = 'view';
    fixture.detectChanges();
    let view = fixture.debugElement.query(By.css('#overview'))
    expect(view).toBeTruthy();
  });

  it('should contain edit station if toggle is edit', () => {
    component.viewType = 'edit';
    fixture.detectChanges();
    let view = fixture.debugElement.query(By.css('#edit'))
    expect(view).toBeTruthy();
  });

  it('should contain station readings if toggle is readings', () => {
    component.viewType = 'readings';
    fixture.detectChanges();
    let view = fixture.debugElement.query(By.css('#readings'))
    expect(view).toBeTruthy();
  });

  it('should contain station sensors if toggle is sensors', () => {
    component.viewType = 'sensors';
    fixture.detectChanges();
    let view = fixture.debugElement.query(By.css('#sensors'))
    expect(view).toBeTruthy();
  });

  it('should contain spacer if no user auth', () => {
    let view = fixture.debugElement.query(By.css('#spacer'))
    expect(view).toBeTruthy();
  });
 });
