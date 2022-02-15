import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayarabeawalPageRoutingModule } from './kefayarabeawal-routing.module';

import { KefayarabeawalPage } from './kefayarabeawal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayarabeawalPageRoutingModule
  ],
  declarations: [KefayarabeawalPage]
})
export class KefayarabeawalPageModule {}
