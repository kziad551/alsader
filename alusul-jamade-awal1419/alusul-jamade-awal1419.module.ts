import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwal1419PageRoutingModule } from './alusul-jamade-awal1419-routing.module';

import { AlusulJamadeAwal1419Page } from './alusul-jamade-awal1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeAwal1419PageRoutingModule
  ],
  declarations: [AlusulJamadeAwal1419Page]
})
export class AlusulJamadeAwal1419PageModule {}
