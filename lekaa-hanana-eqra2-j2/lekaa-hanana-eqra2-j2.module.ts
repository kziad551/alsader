import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J2PageRoutingModule } from './lekaa-hanana-eqra2-j2-routing.module';

import { LekaaHananaEqra2J2Page } from './lekaa-hanana-eqra2-j2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaaHananaEqra2J2PageRoutingModule
  ],
  declarations: [LekaaHananaEqra2J2Page]
})
export class LekaaHananaEqra2J2PageModule {}
