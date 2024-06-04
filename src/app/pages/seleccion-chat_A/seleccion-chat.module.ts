import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionChatPageRoutingModule } from './seleccion-chat-routing.module';

import { SeleccionChatPage } from './seleccion-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionChatPageRoutingModule
  ],
  declarations: [SeleccionChatPage]
})
export class SeleccionChatPageModule {}
