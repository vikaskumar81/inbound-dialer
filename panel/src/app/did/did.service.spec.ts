import { TestBed, inject } from '@angular/core/testing';

import { DidService } from './did.service';

describe('DidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DidService]
    });
  });

  it('should be created', inject([DidService], (service: DidService) => {
    expect(service).toBeTruthy();
  }));
});
