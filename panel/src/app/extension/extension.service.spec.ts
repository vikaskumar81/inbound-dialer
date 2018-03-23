import { TestBed, inject } from '@angular/core/testing';

import { ExtensionService } from './extension.service';

describe('ExtensionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtensionService]
    });
  });

  it('should be created', inject([ExtensionService], (service: ExtensionService) => {
    expect(service).toBeTruthy();
  }));
});
