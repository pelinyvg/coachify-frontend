import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOverviewCoachComponent } from './session-overview-coach.component';

describe('SessionOverviewCoachComponent', () => {
  let component: SessionOverviewCoachComponent;
  let fixture: ComponentFixture<SessionOverviewCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionOverviewCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionOverviewCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
