import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachNavbarSideComponent } from './coach-navbar-side.component';

describe('CoachNavbarSideComponent', () => {
  let component: CoachNavbarSideComponent;
  let fixture: ComponentFixture<CoachNavbarSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachNavbarSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachNavbarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
