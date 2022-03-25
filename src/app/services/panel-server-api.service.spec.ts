import { TestBed } from '@angular/core/testing';

import { PanelServerApiService } from './panel-server-api.service';

describe('PanelServerApiService', () => {
  let service: PanelServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
