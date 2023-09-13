import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitypaymentComponent } from './electricitypayment.component';

describe('ElectricitypaymentComponent', () => {
  let component: ElectricitypaymentComponent;
  let fixture: ComponentFixture<ElectricitypaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricitypaymentComponent]
    });
    fixture = TestBed.createComponent(ElectricitypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
