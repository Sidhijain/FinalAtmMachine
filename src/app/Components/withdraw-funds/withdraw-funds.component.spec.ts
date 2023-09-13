import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFundsComponent } from './withdraw-funds.component';

describe('WithdrawFundsComponent', () => {
  let component: WithdrawFundsComponent;
  let fixture: ComponentFixture<WithdrawFundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawFundsComponent]
    });
    fixture = TestBed.createComponent(WithdrawFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
