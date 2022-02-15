import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1417PageRoutingModule } from './kefaya1417-routing.module';

import { Kefaya1417Page } from './kefaya1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1417PageRoutingModule
  ],
  declarations: [Kefaya1417Page]
})
export class Kefaya1417PageModule {}
