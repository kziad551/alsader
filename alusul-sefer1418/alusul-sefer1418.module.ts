import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulSefer1418PageRoutingModule } from './alusul-sefer1418-routing.module';

import { AlusulSefer1418Page } from './alusul-sefer1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulSefer1418PageRoutingModule
  ],
  declarations: [AlusulSefer1418Page]
})
export class AlusulSefer1418PageModule {}
