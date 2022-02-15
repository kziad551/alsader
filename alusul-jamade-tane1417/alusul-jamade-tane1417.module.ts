import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTane1417PageRoutingModule } from './alusul-jamade-tane1417-routing.module';

import { AlusulJamadeTane1417Page } from './alusul-jamade-tane1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeTane1417PageRoutingModule
  ],
  declarations: [AlusulJamadeTane1417Page]
})
export class AlusulJamadeTane1417PageModule {}
