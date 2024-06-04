import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionChatPage } from './seleccion-chat.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionChatPageRoutingModule {}
