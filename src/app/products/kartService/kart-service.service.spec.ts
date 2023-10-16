import { TestBed } from '@angular/core/testing';

import { KartServiceService } from './kart-service.service';

describe('KartServiceService', () => {
  let service: KartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
