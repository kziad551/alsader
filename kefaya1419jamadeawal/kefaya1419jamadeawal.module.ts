import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419jamadeawalPageRoutingModule } from './kefaya1419jamadeawal-routing.module';

import { Kefaya1419jamadeawalPage } from './kefaya1419jamadeawal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419jamadeawalPageRoutingModule
  ],
  declarations: [Kefaya1419jamadeawalPage]
})
export class Kefaya1419jamadeawalPageModule {}
