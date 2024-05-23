import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogupProfesionalPage } from './logup-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: LogupProfesionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogupProfesionalPageRoutingModule {}
