import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProfesPage } from './tab-profes.page';

const routes: Routes = [
  {
    path: '',
    component: TabProfesPage,
    children: [
      {
        path: 'chat-pendiente',
        loadChildren: () => import('../chat-pendiente_P/chat-pendiente.module').then( m => m.ChatPendientePageModule)
      },
      {
        path: 'report-profes',
        loadChildren: () => import('../report-profes/report-profes.module').then( m => m.ReportProfesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProfesPageRoutingModule {}
