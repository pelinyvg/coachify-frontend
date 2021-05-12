import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCoachesComponent } from './overview-coaches.component';

describe('OverviewCoachesComponent', () => {
  let component: OverviewCoachesComponent;
  let fixture: ComponentFixture<OverviewCoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCoachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
