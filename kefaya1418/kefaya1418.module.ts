import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1418PageRoutingModule } from './kefaya1418-routing.module';

import { Kefaya1418Page } from './kefaya1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1418PageRoutingModule
  ],
  declarations: [Kefaya1418Page]
})
export class Kefaya1418PageModule {}
