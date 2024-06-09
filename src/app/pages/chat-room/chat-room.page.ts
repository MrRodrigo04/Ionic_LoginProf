import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { UserData } from '../../interfaces/intChat/UserData';
import { Message } from 'src/app/interfaces/intChat/Message';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit, OnDestroy{

  public Usuario = [];
  messages: Message[] = [];
  nickname: string | null = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private socket: Socket,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    const estu= localStorage.getItem('estu');
    if (estu){
      this.Usuario = JSON.parse(estu);
    }

    this.nickname = this.Usuario[1];    

    this.socket.on('message', (message: Message) => this.messages.push(message));

    this.socket.on('users-changed', (data: UserData) => {
      const user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
  }
  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}