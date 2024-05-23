import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginProfesionalPage } from './login-profesional.page';

describe('LoginProfesionalPage', () => {
  let component: LoginProfesionalPage;
  let fixture: ComponentFixture<LoginProfesionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
