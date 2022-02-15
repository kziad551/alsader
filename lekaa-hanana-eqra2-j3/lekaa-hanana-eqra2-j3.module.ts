import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J3PageRoutingModule } from './lekaa-hanana-eqra2-j3-routing.module';

import { LekaaHananaEqra2J3Page } from './lekaa-hanana-eqra2-j3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaaHananaEqra2J3PageRoutingModule
  ],
  declarations: [LekaaHananaEqra2J3Page]
})
export class LekaaHananaEqra2J3PageModule {}
