import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticoPageRoutingModule } from './diagnostico-routing.module';

import { DiagnosticoPage } from './diagnostico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DiagnosticoPageRoutingModule
  ],
  declarations: [DiagnosticoPage]
})
export class DiagnosticoPageModule {}
