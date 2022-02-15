import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayajamadetanePageRoutingModule } from './kefayajamadetane-routing.module';

import { KefayajamadetanePage } from './kefayajamadetane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayajamadetanePageRoutingModule
  ],
  declarations: [KefayajamadetanePage]
})
export class KefayajamadetanePageModule {}
