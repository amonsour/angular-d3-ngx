import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboChartsNewComponent } from './combo-charts-new.component';

describe('ComboChartsNewComponent', () => {
  let component: ComboChartsNewComponent;
  let fixture: ComponentFixture<ComboChartsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboChartsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboChartsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
