import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeNavbarTopComponent } from './coachee-navbar-top.component';

describe('CoacheeNavbarTopComponent', () => {
  let component: CoacheeNavbarTopComponent;
  let fixture: ComponentFixture<CoacheeNavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheeNavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
