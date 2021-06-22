import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { ReadingsListComponent } from './readings-list.component';

describe('ReadingsListComponent', () => {
  let component: ReadingsListComponent;
  let fixture: ComponentFixture<ReadingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      //BrowserAnimationsModule
    ],
      declarations: [ ReadingsListComponent ],
      /* providers: [
        // { provide: MAT_DIALOG_DATA, useValue: {} },
        // { provide: MatDialogRef, useValue: {} }
      ], */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsListComponent);
    component = fixture.componentInstance;
    component.readings$ = new Subject(); // TODO
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
