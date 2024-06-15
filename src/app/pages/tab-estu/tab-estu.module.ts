import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabEstuPageRoutingModule } from './tab-estu-routing.module';

import { TabEstuPage } from './tab-estu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabEstuPageRoutingModule
  ],
  declarations: [TabEstuPage]
})
export class TabEstuPageModule {}
