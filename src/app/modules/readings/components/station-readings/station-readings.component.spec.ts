import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { StationReadingsComponent } from './station-readings.component';

describe('StationReadingsComponent', () => {
  let component: StationReadingsComponent;
  let fixture: ComponentFixture<StationReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule,
        //AppRoutingModule,
        // BrowserAnimationsModule
      ],
      declarations: [ StationReadingsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
