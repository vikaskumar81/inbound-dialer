import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditextensionComponent } from './editextension.component';

describe('EditextensionComponent', () => {
  let component: EditextensionComponent;
  let fixture: ComponentFixture<EditextensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditextensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditextensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
