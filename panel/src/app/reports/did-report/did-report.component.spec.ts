import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidReportComponent } from './did-report.component';

describe('DidReportComponent', () => {
  let component: DidReportComponent;
  let fixture: ComponentFixture<DidReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
