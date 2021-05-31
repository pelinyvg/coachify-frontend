import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfileChangeComponent } from './coach-profile-change.component';

describe('CoachProfileChangeComponent', () => {
  let component: CoachProfileChangeComponent;
  let fixture: ComponentFixture<CoachProfileChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachProfileChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachProfileChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
