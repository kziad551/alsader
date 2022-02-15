import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayaseferPageRoutingModule } from './kefayasefer-routing.module';

import { KefayaseferPage } from './kefayasefer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayaseferPageRoutingModule
  ],
  declarations: [KefayaseferPage]
})
export class KefayaseferPageModule {}
