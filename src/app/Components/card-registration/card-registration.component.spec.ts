import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistrationComponent } from './card-registration.component';

describe('CardRegisterationComponent', () => {
  let component: CardRegistrationComponent;
  let fixture: ComponentFixture<CardRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRegistrationComponent]
    });
    fixture = TestBed.createComponent(CardRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
