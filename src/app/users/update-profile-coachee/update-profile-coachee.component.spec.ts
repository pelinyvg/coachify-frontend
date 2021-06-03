import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileCoacheeComponent } from './update-profile-coachee.component';

describe('UpdateProfileCoacheeComponent', () => {
  let component: UpdateProfileCoacheeComponent;
  let fixture: ComponentFixture<UpdateProfileCoacheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProfileCoacheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
