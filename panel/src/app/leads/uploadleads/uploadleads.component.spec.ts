import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadleadsComponent } from './uploadleads.component';

describe('UploadleadsComponent', () => {
  let component: UploadleadsComponent;
  let fixture: ComponentFixture<UploadleadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadleadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
