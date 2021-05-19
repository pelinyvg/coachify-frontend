import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeDetailOfACoachComponent } from './coachee-detail-of-a-coach.component';

describe('CoacheeDetailOfACoachComponent', () => {
  let component: CoacheeDetailOfACoachComponent;
  let fixture: ComponentFixture<CoacheeDetailOfACoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheeDetailOfACoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeDetailOfACoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
