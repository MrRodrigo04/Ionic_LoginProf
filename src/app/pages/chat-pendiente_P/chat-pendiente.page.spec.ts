import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatPendientePage } from './chat-pendiente.page';

describe('ChatPendientePage', () => {
  let component: ChatPendientePage;
  let fixture: ComponentFixture<ChatPendientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPendientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
