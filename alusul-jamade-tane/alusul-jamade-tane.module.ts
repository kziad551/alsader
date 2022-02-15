import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTanePageRoutingModule } from './alusul-jamade-tane-routing.module';

import { AlusulJamadeTanePage } from './alusul-jamade-tane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeTanePageRoutingModule
  ],
  declarations: [AlusulJamadeTanePage]
})
export class AlusulJamadeTanePageModule {}
