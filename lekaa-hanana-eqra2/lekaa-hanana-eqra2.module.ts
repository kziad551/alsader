import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2PageRoutingModule } from './lekaa-hanana-eqra2-routing.module';

import { LekaaHananaEqra2Page } from './lekaa-hanana-eqra2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaaHananaEqra2PageRoutingModule
  ],
  declarations: [LekaaHananaEqra2Page]
})
export class LekaaHananaEqra2PageModule {}
