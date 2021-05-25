import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorizedUserComponent } from './not-authorized-user.component';

describe('NotAuthorizedUserComponent', () => {
  let component: NotAuthorizedUserComponent;
  let fixture: ComponentFixture<NotAuthorizedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAuthorizedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthorizedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
