import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmessageComponent } from './editmessage.component';

describe('EditmessageComponent', () => {
  let component: EditmessageComponent;
  let fixture: ComponentFixture<EditmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
