import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatefindcustomerComponent } from './datefindcustomer.component';

describe('DatefindcustomerComponent', () => {
  let component: DatefindcustomerComponent;
  let fixture: ComponentFixture<DatefindcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatefindcustomerComponent]
    });
    fixture = TestBed.createComponent(DatefindcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
