import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
        BrowserAnimationsModule
      ],
      declarations: [EditReadingsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
