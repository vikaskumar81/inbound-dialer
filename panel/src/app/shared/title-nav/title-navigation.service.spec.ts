import { TestBed, inject } from '@angular/core/testing';

import { TitleNavigationService } from './title-navigation.service';

describe('TitleNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleNavigationService]
    });
  });

  it('should be created', inject([TitleNavigationService], (service: TitleNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
