import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwal1417PageRoutingModule } from './alusul-jamade-awal1417-routing.module';

import { AlusulJamadeAwal1417Page } from './alusul-jamade-awal1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeAwal1417PageRoutingModule
  ],
  declarations: [AlusulJamadeAwal1417Page]
})
export class AlusulJamadeAwal1417PageModule {}
