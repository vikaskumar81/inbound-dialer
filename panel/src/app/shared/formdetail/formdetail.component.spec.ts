import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdetailComponent } from './formdetail.component';

describe('FormdetailComponent', () => {
  let component: FormdetailComponent;
  let fixture: ComponentFixture<FormdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
