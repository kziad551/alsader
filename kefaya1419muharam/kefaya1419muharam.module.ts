import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419muharamPageRoutingModule } from './kefaya1419muharam-routing.module';

import { Kefaya1419muharamPage } from './kefaya1419muharam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419muharamPageRoutingModule
  ],
  declarations: [Kefaya1419muharamPage]
})
export class Kefaya1419muharamPageModule {}
