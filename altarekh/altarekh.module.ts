import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltarekhPageRoutingModule } from './altarekh-routing.module';

import { AltarekhPage } from './altarekh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltarekhPageRoutingModule
  ],
  declarations: [AltarekhPage]
})
export class AltarekhPageModule {}
