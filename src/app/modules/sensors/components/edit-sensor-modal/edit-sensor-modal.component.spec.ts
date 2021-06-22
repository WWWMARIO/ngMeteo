import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { EditSensorModalComponent } from './edit-sensor-modal.component';

describe('EditSensorModalComponent', () => {
  let component: EditSensorModalComponent;
  let fixture: ComponentFixture<EditSensorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      BrowserAnimationsModule
    ],
      declarations: [ EditSensorModalComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
       { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSensorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
