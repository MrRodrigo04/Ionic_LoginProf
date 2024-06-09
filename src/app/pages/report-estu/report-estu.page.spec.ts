import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportEstuPage } from './report-estu.page';

describe('ReportEstuPage', () => {
  let component: ReportEstuPage;
  let fixture: ComponentFixture<ReportEstuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEstuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
