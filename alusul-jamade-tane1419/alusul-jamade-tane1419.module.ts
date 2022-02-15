import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTane1419PageRoutingModule } from './alusul-jamade-tane1419-routing.module';

import { AlusulJamadeTane1419Page } from './alusul-jamade-tane1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeTane1419PageRoutingModule
  ],
  declarations: [AlusulJamadeTane1419Page]
})
export class AlusulJamadeTane1419PageModule {}
