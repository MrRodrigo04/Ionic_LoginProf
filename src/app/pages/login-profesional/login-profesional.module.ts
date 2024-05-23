import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfesionalPageRoutingModule } from './login-profesional-routing.module';

import { LoginProfesionalPage } from './login-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginProfesionalPageRoutingModule
  ],
  declarations: [LoginProfesionalPage]
})
export class LoginProfesionalPageModule {}
