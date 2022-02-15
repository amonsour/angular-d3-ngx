import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboLineBarChartComponent } from './combo-line-bar-chart.component';

describe('ComboLineBarChartComponent', () => {
  let component: ComboLineBarChartComponent;
  let fixture: ComponentFixture<ComboLineBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboLineBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboLineBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
