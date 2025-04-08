import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdometerlogsComponent } from './odometerlogs.component';

describe('OdometerlogsComponent', () => {
  let component: OdometerlogsComponent;
  let fixture: ComponentFixture<OdometerlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdometerlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdometerlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
