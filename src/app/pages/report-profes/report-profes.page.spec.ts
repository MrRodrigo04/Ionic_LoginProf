import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportProfesPage } from './report-profes.page';

describe('ReportProfesPage', () => {
  let component: ReportProfesPage;
  let fixture: ComponentFixture<ReportProfesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProfesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
