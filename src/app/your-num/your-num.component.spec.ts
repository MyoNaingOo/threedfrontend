import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourNumComponent } from './your-num.component';

describe('YourNumComponent', () => {
  let component: YourNumComponent;
  let fixture: ComponentFixture<YourNumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourNumComponent]
    });
    fixture = TestBed.createComponent(YourNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
