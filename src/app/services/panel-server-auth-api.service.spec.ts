import { TestBed } from '@angular/core/testing';

import { PanelServerAuthApiService } from './panel-server-auth-api.service';

describe('PanelServerAuthApiService', () => {
  let service: PanelServerAuthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelServerAuthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
