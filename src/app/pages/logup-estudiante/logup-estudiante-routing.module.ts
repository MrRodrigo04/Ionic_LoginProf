import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogupEstudiantePage } from './logup-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: LogupEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogupEstudiantePageRoutingModule {}
