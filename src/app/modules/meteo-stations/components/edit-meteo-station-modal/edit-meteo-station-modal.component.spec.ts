import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment.prod";

import { EditMeteoStationModalComponent } from './edit-meteo-station-modal.component';

describe('EditMeteoStationModalComponent', () => {
  let component: EditMeteoStationModalComponent;
  let fixture: ComponentFixture<EditMeteoStationModalComponent>;

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
    component.data = {
      "name": "druga stanica",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "description": "druga meteo stanica",
      "geoLocation": {
        "_lat": 22,
        "_long": 22
      },
      "id": "6BlqNNrpO4LEoFzlFA6B"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
