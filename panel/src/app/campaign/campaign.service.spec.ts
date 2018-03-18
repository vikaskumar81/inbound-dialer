import { TestBed, inject } from '@angular/core/testing';

import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignService]
    });
  });

  it('should be created', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));
});
