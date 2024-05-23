import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogupEstudiantePage } from './logup-estudiante.page';

describe('LogupEstudiantePage', () => {
  let component: LogupEstudiantePage;
  let fixture: ComponentFixture<LogupEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LogupEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
