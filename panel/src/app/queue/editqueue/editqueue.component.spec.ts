import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditqueueComponent } from './editqueue.component';

describe('EditqueueComponent', () => {
  let component: EditqueueComponent;
  let fixture: ComponentFixture<EditqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
