import { TestBed, inject } from '@angular/core/testing';

import { LeadsService } from './leads.service';

describe('LeadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadsService]
    });
  });

  it('should be created', inject([LeadsService], (service: LeadsService) => {
    expect(service).toBeTruthy();
  }));
});
