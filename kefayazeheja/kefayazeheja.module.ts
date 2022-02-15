import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayazehejaPageRoutingModule } from './kefayazeheja-routing.module';

import { KefayazehejaPage } from './kefayazeheja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayazehejaPageRoutingModule
  ],
  declarations: [KefayazehejaPage]
})
export class KefayazehejaPageModule {}
