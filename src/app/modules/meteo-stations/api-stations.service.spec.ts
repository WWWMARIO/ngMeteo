import { TestBed } from '@angular/core/testing';

import { ApiStationsService } from './api-stations.service';

describe('ApiStationsService', () => {
  let service: ApiStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
