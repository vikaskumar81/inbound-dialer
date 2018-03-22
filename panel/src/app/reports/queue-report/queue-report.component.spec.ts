import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueReportComponent } from './queue-report.component';

describe('QueueReportComponent', () => {
  let component: QueueReportComponent;
  let fixture: ComponentFixture<QueueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
