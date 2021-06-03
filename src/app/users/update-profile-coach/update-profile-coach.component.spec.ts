import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateProfileCoachComponent} from './update-profile-coach.component';

describe('UpdateProfileCoachComponent', () => {
  let component: UpdateProfileCoachComponent;
  let fixture: ComponentFixture<UpdateProfileCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfileCoachComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
