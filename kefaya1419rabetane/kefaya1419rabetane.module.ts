import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419rabetanePageRoutingModule } from './kefaya1419rabetane-routing.module';

import { Kefaya1419rabetanePage } from './kefaya1419rabetane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419rabetanePageRoutingModule
  ],
  declarations: [Kefaya1419rabetanePage]
})
export class Kefaya1419rabetanePageModule {}
