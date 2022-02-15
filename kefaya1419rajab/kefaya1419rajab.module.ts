import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419rajabPageRoutingModule } from './kefaya1419rajab-routing.module';

import { Kefaya1419rajabPage } from './kefaya1419rajab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419rajabPageRoutingModule
  ],
  declarations: [Kefaya1419rajabPage]
})
export class Kefaya1419rajabPageModule {}
