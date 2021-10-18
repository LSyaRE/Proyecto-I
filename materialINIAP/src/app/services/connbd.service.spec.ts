import { TestBed } from '@angular/core/testing';

import { ConnbdService } from './connbd.service';

describe('ConnbdService', () => {
  let service: ConnbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
