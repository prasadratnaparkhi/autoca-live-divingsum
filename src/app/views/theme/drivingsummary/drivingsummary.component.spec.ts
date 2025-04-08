import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingsummaryComponent } from './drivingsummary.component';

describe('DrivingsummaryComponent', () => {
  let component: DrivingsummaryComponent;
  let fixture: ComponentFixture<DrivingsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivingsummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
