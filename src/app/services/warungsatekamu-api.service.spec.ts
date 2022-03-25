import { TestBed } from '@angular/core/testing';

import { WarungsatekamuApiService } from './warungsatekamu-api.service';

describe('WarungsatekamuApiService', () => {
  let service: WarungsatekamuApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarungsatekamuApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
