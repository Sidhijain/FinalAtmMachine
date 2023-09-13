import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserPinComponent } from './change-user-pin.component';

describe('ChangeUserPinComponent', () => {
  let component: ChangeUserPinComponent;
  let fixture: ComponentFixture<ChangeUserPinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeUserPinComponent]
    });
    fixture = TestBed.createComponent(ChangeUserPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
