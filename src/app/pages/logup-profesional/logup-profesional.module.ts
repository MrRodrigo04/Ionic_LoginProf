import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogupProfesionalPageRoutingModule } from './logup-profesional-routing.module';

import { LogupProfesionalPage } from './logup-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LogupProfesionalPageRoutingModule
  ],
  declarations: [LogupProfesionalPage]
})
export class LogupProfesionalPageModule {}
