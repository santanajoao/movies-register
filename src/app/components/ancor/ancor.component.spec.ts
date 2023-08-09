import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncorComponent } from './ancor.component';

describe('AncorComponent', () => {
  let component: AncorComponent;
  let fixture: ComponentFixture<AncorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AncorComponent]
    });
    fixture = TestBed.createComponent(AncorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
