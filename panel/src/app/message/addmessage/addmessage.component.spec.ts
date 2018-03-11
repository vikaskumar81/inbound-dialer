import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmessageComponent } from './addmessage.component';

describe('AddmessageComponent', () => {
  let component: AddmessageComponent;
  let fixture: ComponentFixture<AddmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
