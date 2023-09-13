import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpaymentsComponent } from './billpayments.component';

describe('BillpaymentsComponent', () => {
  let component: BillpaymentsComponent;
  let fixture: ComponentFixture<BillpaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillpaymentsComponent]
    });
    fixture = TestBed.createComponent(BillpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
