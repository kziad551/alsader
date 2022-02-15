import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J1PageRoutingModule } from './lekaa-hanana-eqra2-j1-routing.module';

import { LekaaHananaEqra2J1Page } from './lekaa-hanana-eqra2-j1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaaHananaEqra2J1PageRoutingModule
  ],
  declarations: [LekaaHananaEqra2J1Page]
})
export class LekaaHananaEqra2J1PageModule {}
