import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulSefer1419PageRoutingModule } from './alusul-sefer1419-routing.module';

import { AlusulSefer1419Page } from './alusul-sefer1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulSefer1419PageRoutingModule
  ],
  declarations: [AlusulSefer1419Page]
})
export class AlusulSefer1419PageModule {}
