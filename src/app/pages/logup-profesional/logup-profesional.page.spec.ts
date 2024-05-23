import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogupProfesionalPage } from './logup-profesional.page';

describe('LogupProfesionalPage', () => {
  let component: LogupProfesionalPage;
  let fixture: ComponentFixture<LogupProfesionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogupProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
