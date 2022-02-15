import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayashawalPageRoutingModule } from './kefayashawal-routing.module';

import { KefayashawalPage } from './kefayashawal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayashawalPageRoutingModule
  ],
  declarations: [KefayashawalPage]
})
export class KefayashawalPageModule {}
