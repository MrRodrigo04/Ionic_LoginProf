import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPendientePage } from './chat-pendiente.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPendientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPendientePageRoutingModule {}
