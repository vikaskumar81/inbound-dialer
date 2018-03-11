import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalldetailsComponent } from './calldetails.component';

describe('CalldetailsComponent', () => {
  let component: CalldetailsComponent;
  let fixture: ComponentFixture<CalldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
