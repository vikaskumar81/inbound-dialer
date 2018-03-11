import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcampaignComponent } from './listcampaign.component';

describe('ListcampaignComponent', () => {
  let component: ListcampaignComponent;
  let fixture: ComponentFixture<ListcampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
