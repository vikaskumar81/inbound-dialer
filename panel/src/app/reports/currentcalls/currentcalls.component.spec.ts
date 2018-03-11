import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentcallsComponent } from './currentcalls.component';

describe('CurrentcallsComponent', () => {
  let component: CurrentcallsComponent;
  let fixture: ComponentFixture<CurrentcallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentcallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentcallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
