import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsupplierComponent } from './editsupplier.component';

describe('EditsupplierComponent', () => {
  let component: EditsupplierComponent;
  let fixture: ComponentFixture<EditsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
