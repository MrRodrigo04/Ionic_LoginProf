import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabEstuPage } from './tab-estu.page';

describe('TabEstuPage', () => {
  let component: TabEstuPage;
  let fixture: ComponentFixture<TabEstuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEstuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
