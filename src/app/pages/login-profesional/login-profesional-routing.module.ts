import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginProfesionalPage } from './login-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: LoginProfesionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginProfesionalPageRoutingModule {}
