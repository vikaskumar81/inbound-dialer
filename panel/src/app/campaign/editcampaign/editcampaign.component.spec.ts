import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcampaignComponent } from './editcampaign.component';

describe('EditcampaignComponent', () => {
  let component: EditcampaignComponent;
  let fixture: ComponentFixture<EditcampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
