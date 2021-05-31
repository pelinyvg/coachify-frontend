import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongResetTokenComponent } from './wrong-reset-token.component';

describe('WrongResetTokenComponent', () => {
  let component: WrongResetTokenComponent;
  let fixture: ComponentFixture<WrongResetTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongResetTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongResetTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
