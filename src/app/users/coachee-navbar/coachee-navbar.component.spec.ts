import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeNavbarComponent } from './coachee-navbar.component';

describe('CoacheeNavbarComponent', () => {
  let component: CoacheeNavbarComponent;
  let fixture: ComponentFixture<CoacheeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoacheeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
