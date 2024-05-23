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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logup',
    loadChildren: () => import('./pages/logup/logup.module').then( m => m.LogupPageModule)
  },
  {
    path: 'login-estudiante',
    loadChildren: () => import('./pages/login-estudiante/login-estudiante.module').then( m => m.LoginEstudiantePageModule)
  },
  {
    path: 'login-profesional',
    loadChildren: () => import('./pages/login-profesional/login-profesional.module').then( m => m.LoginProfesionalPageModule)
  },
  {
    path: 'logup-estudiante',
    loadChildren: () => import('./pages/logup-estudiante/logup-estudiante.module').then( m => m.LogupEstudiantePageModule)
  },
  {
    path: 'logup-profesional',
    loadChildren: () => import('./pages/logup-profesional/logup-profesional.module').then( m => m.LogupProfesionalPageModule)
  },
  {
    path: 'seleccion-chat',
    loadChildren: () => import('./pages/seleccion-chat/seleccion-chat.module').then( m => m.SeleccionChatPageModule)
  },
  {
    path: 'chat-pendiente',
    loadChildren: () => import('./pages/chat-pendiente/chat-pendiente.module').then( m => m.ChatPendientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
