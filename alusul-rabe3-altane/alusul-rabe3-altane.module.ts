import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulRabe3AltanePageRoutingModule } from './alusul-rabe3-altane-routing.module';

import { AlusulRabe3AltanePage } from './alusul-rabe3-altane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulRabe3AltanePageRoutingModule
  ],
  declarations: [AlusulRabe3AltanePage]
})
export class AlusulRabe3AltanePageModule {}
