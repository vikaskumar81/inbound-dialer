import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDidComponent } from './upload-did.component';

describe('UploadDidComponent', () => {
  let component: UploadDidComponent;
  let fixture: ComponentFixture<UploadDidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
