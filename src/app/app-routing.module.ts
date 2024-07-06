import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login-profesional',
    loadChildren: () => import('./pages/login-profesional/login-profesional.module').then( m => m.LoginProfesionalPageModule)
  },
  {
    path: 'logup-profesional',
    loadChildren: () => import('./pages/logup-profesional/logup-profesional.module').then( m => m.LogupProfesionalPageModule)
  },
  {
    path: 'chat-room',
    loadChildren: () => import('./pages/chat-room/chat-room.module').then( m => m.ChatRoomPageModule)
  },
  {
    path: 'tab-profes',
    loadChildren: () => import('./pages/tab-profes/tab-profes.module').then( m => m.TabProfesPageModule)
  },
  {
    path: 'diagnostico',
    loadChildren: () => import('./pages/diagnostico/diagnostico.module').then( m => m.DiagnosticoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
