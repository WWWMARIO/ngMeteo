import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";

import { ApiSensorsService } from './api-sensors.service';

describe('ApiSensorsService', () => {
  let service: ApiSensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      // SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ]/* ,
      declarations: [ EditMeteoStationModalComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        // { provide: MatDialogRef, useValue: {} }
      ], */
    });
    service = TestBed.inject(ApiSensorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
