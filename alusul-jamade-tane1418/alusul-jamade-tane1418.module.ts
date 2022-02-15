import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTane1418PageRoutingModule } from './alusul-jamade-tane1418-routing.module';

import { AlusulJamadeTane1418Page } from './alusul-jamade-tane1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeTane1418PageRoutingModule
  ],
  declarations: [AlusulJamadeTane1418Page]
})
export class AlusulJamadeTane1418PageModule {}
