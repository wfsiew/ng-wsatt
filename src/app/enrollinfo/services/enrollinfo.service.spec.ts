import { TestBed } from '@angular/core/testing';

import { EnrollinfoService } from './enrollinfo.service';

describe('EnrollinfoService', () => {
  let service: EnrollinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
