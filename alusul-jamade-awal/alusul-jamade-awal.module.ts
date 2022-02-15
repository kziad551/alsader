import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwalPageRoutingModule } from './alusul-jamade-awal-routing.module';

import { AlusulJamadeAwalPage } from './alusul-jamade-awal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulJamadeAwalPageRoutingModule
  ],
  declarations: [AlusulJamadeAwalPage]
})
export class AlusulJamadeAwalPageModule {}
