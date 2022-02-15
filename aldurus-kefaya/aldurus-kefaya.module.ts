import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AldurusKefayaPageRoutingModule } from './aldurus-kefaya-routing.module';

import { AldurusKefayaPage } from './aldurus-kefaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AldurusKefayaPageRoutingModule
  ],
  declarations: [AldurusKefayaPage]
})
export class AldurusKefayaPageModule {}
