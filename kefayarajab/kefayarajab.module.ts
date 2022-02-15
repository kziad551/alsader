import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayarajabPageRoutingModule } from './kefayarajab-routing.module';

import { KefayarajabPage } from './kefayarajab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayarajabPageRoutingModule
  ],
  declarations: [KefayarajabPage]
})
export class KefayarajabPageModule {}
