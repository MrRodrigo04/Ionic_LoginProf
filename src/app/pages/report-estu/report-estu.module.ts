import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportEstuPageRoutingModule } from './report-estu-routing.module';

import { ReportEstuPage } from './report-estu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportEstuPageRoutingModule
  ],
  declarations: [ReportEstuPage]
})
export class ReportEstuPageModule {}
