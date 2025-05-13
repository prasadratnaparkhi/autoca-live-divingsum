import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitaldocumentComponent } from './digitaldocument.component';

describe('DigitaldocumentComponent', () => {
  let component: DigitaldocumentComponent;
  let fixture: ComponentFixture<DigitaldocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitaldocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitaldocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
