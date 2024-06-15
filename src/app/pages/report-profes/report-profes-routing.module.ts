import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportProfesPage } from './report-profes.page';

const routes: Routes = [
  {
    path: '',
    component: ReportProfesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportProfesPageRoutingModule {}
