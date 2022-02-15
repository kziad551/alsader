import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419PageRoutingModule } from './kefaya1419-routing.module';

import { Kefaya1419Page } from './kefaya1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419PageRoutingModule
  ],
  declarations: [Kefaya1419Page]
})
export class Kefaya1419PageModule {}
