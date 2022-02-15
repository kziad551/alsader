import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419seferPageRoutingModule } from './kefaya1419sefer-routing.module';

import { Kefaya1419seferPage } from './kefaya1419sefer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419seferPageRoutingModule
  ],
  declarations: [Kefaya1419seferPage]
})
export class Kefaya1419seferPageModule {}
