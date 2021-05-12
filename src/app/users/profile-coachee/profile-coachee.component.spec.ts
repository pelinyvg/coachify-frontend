import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCoacheeComponent } from './profile-coachee.component';

describe('ProfileCoacheeComponent', () => {
  let component: ProfileCoacheeComponent;
  let fixture: ComponentFixture<ProfileCoacheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCoacheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
