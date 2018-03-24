import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDidComponent } from './add-did.component';

describe('AddDidComponent', () => {
  let component: AddDidComponent;
  let fixture: ComponentFixture<AddDidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
