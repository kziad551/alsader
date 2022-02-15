import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayazekaadaPageRoutingModule } from './kefayazekaada-routing.module';

import { KefayazekaadaPage } from './kefayazekaada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayazekaadaPageRoutingModule
  ],
  declarations: [KefayazekaadaPage]
})
export class KefayazekaadaPageModule {}
