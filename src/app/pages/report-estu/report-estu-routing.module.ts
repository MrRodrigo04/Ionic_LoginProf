import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportEstuPage } from './report-estu.page';

const routes: Routes = [
  {
    path: '',
    component: ReportEstuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportEstuPageRoutingModule {}
