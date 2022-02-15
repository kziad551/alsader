import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwal1418PageRoutingModule } from './alusul-jamade-awal1418-routing.module';

import { AlusulJamadeAwal1418Page } from './alusul-jamade-awal1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeAwal1418PageRoutingModule
  ],
  declarations: [AlusulJamadeAwal1418Page]
})
export class AlusulJamadeAwal1418PageModule {}
