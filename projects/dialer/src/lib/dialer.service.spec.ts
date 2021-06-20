import { TestBed } from '@angular/core/testing';

import { DialerService } from './dialer.service';

describe('DialerService', () => {
  let service: DialerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
