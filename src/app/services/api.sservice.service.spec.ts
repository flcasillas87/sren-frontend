import { TestBed } from '@angular/core/testing';

import { ApiSserviceService } from './api.sservice.service';

describe('ApiSserviceService', () => {
  let service: ApiSserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
