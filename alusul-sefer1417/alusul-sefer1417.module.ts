import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulSefer1417PageRoutingModule } from './alusul-sefer1417-routing.module';

import { AlusulSefer1417Page } from './alusul-sefer1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulSefer1417PageRoutingModule
  ],
  declarations: [AlusulSefer1417Page]
})
export class AlusulSefer1417PageModule {}
