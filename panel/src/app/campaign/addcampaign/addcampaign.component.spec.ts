import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcampaignComponent } from './addcampaign.component';

describe('AddcampaignComponent', () => {
  let component: AddcampaignComponent;
  let fixture: ComponentFixture<AddcampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
