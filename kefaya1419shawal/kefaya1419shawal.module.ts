import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419shawalPageRoutingModule } from './kefaya1419shawal-routing.module';

import { Kefaya1419shawalPage } from './kefaya1419shawal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419shawalPageRoutingModule
  ],
  declarations: [Kefaya1419shawalPage]
})
export class Kefaya1419shawalPageModule {}
