import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeACoachComponent } from './become-a-coach.component';

describe('BecomeACoachComponent', () => {
  let component: BecomeACoachComponent;
  let fixture: ComponentFixture<BecomeACoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeACoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeACoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
