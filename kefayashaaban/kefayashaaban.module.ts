import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayashaabanPageRoutingModule } from './kefayashaaban-routing.module';

import { KefayashaabanPage } from './kefayashaaban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayashaabanPageRoutingModule
  ],
  declarations: [KefayashaabanPage]
})
export class KefayashaabanPageModule {}
