import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFindComponent } from './date-find.component';

describe('DateFindComponent', () => {
  let component: DateFindComponent;
  let fixture: ComponentFixture<DateFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateFindComponent]
    });
    fixture = TestBed.createComponent(DateFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
