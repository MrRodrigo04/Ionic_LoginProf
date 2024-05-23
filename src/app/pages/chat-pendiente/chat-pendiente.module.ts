import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPendientePageRoutingModule } from './chat-pendiente-routing.module';

import { ChatPendientePage } from './chat-pendiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPendientePageRoutingModule
  ],
  declarations: [ChatPendientePage]
})
export class ChatPendientePageModule {}
