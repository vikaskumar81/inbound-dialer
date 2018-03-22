import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddextensionComponent } from './addextension.component';

describe('AddextensionComponent', () => {
  let component: AddextensionComponent;
  let fixture: ComponentFixture<AddextensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddextensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddextensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
