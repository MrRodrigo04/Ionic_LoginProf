import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogupEstudiantePageRoutingModule } from './logup-estudiante-routing.module';

import { LogupEstudiantePage } from './logup-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LogupEstudiantePageRoutingModule
  ],
  declarations: [LogupEstudiantePage]
})
export class LogupEstudiantePageModule {}
