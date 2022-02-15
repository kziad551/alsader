import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayamuharamPageRoutingModule } from './kefayamuharam-routing.module';

import { KefayamuharamPage } from './kefayamuharam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayamuharamPageRoutingModule
  ],
  declarations: [KefayamuharamPage]
})
export class KefayamuharamPageModule {}
