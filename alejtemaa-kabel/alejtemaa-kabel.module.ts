import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlejtemaaKabelPageRoutingModule } from './alejtemaa-kabel-routing.module';

import { AlejtemaaKabelPage } from './alejtemaa-kabel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlejtemaaKabelPageRoutingModule
  ],
  declarations: [AlejtemaaKabelPage]
})
export class AlejtemaaKabelPageModule {}
