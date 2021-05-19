import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestASessionComponent } from './request-a-session.component';

describe('RequestASessionComponent', () => {
  let component: RequestASessionComponent;
  let fixture: ComponentFixture<RequestASessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestASessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestASessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
