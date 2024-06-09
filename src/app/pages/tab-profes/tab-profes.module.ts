import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfesPageRoutingModule } from './tab-profes-routing.module';

import { TabProfesPage } from './tab-profes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfesPageRoutingModule
  ],
  declarations: [TabProfesPage]
})
export class TabProfesPageModule {}
