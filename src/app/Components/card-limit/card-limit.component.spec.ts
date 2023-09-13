import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLimitComponent } from './card-limit.component';

describe('CardLimitComponent', () => {
  let component: CardLimitComponent;
  let fixture: ComponentFixture<CardLimitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLimitComponent]
    });
    fixture = TestBed.createComponent(CardLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
