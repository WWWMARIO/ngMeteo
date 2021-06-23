import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { SharedModule } from "../../shared.module";

import { ConfirmDeleteModalComponent } from './confirm-delete-modal.component';

describe('ConfirmDeleteModalComponent', () => {
  let component: ConfirmDeleteModalComponent;
  let fixture: ComponentFixture<ConfirmDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      //AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ ConfirmDeleteModalComponent ],
      providers: [
        // { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain delete button', () => {
    let btn = fixture.debugElement.query(By.css('#deleteBtn'))
    expect(btn).toBeTruthy();
  });

  it('should contain cancel button', () => {
    let btn = fixture.debugElement.query(By.css('#cancelBtn'))
    expect(btn).toBeTruthy();
  });
});
