import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayarabetanePageRoutingModule } from './kefayarabetane-routing.module';

import { KefayarabetanePage } from './kefayarabetane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayarabetanePageRoutingModule
  ],
  declarations: [KefayarabetanePage]
})
export class KefayarabetanePageModule {}
