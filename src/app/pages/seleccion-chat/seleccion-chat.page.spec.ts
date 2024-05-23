import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionChatPage } from './seleccion-chat.page';

describe('SeleccionChatPage', () => {
  let component: SeleccionChatPage;
  let fixture: ComponentFixture<SeleccionChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
