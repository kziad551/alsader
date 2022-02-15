import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltarekhKabelPageRoutingModule } from './altarekh-kabel-routing.module';

import { AltarekhKabelPage } from './altarekh-kabel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltarekhKabelPageRoutingModule
  ],
  declarations: [AltarekhKabelPage]
})
export class AltarekhKabelPageModule {}
