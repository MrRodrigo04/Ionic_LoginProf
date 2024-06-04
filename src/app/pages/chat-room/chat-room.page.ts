import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit, OnDestroy{

  messages = [];
  nickname = '';
  message = '';

  constructor(
    private route: ActivatedRoute,
    private socket: Socket,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

}
