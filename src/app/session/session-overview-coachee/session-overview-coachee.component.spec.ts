import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOverviewCoacheeComponent } from './session-overview-coachee.component';

describe('SessionOverviewCoacheeComponent', () => {
  let component: SessionOverviewCoacheeComponent;
  let fixture: ComponentFixture<SessionOverviewCoacheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionOverviewCoacheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionOverviewCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
