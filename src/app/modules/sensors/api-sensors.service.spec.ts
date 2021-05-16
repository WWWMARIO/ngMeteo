import { TestBed } from '@angular/core/testing';

import { ApiSensorsService } from './api-sensors.service';

describe('ApiSensorsService', () => {
  let service: ApiSensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSensorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
