import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";

import { ApiStationsService } from './api-stations.service';

describe('ApiStationsService', () => {
  let service: ApiStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      AngularFireModule.initializeApp(environment.firebase)
    ]
    });
    service = TestBed.inject(ApiStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
