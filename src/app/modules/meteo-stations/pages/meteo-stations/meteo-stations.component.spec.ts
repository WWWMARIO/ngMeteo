import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef } from "@angular/material/dialog";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { MeteoStationsComponent } from './meteo-stations.component';

describe('MeteoStationComponent', () => {
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
});
