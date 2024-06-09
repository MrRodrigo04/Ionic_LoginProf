import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabProfesPage } from './tab-profes.page';

describe('TabProfesPage', () => {
  let component: TabProfesPage;
  let fixture: ComponentFixture<TabProfesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProfesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
