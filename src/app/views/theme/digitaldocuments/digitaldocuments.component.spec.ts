import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitaldocumentsComponent } from './digitaldocuments.component';

describe('DigitaldocumentsComponent', () => {
  let component: DigitaldocumentsComponent;
  let fixture: ComponentFixture<DigitaldocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitaldocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitaldocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
