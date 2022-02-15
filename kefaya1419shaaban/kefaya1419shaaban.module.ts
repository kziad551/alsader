import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Kefaya1419shaabanPageRoutingModule } from './kefaya1419shaaban-routing.module';

import { Kefaya1419shaabanPage } from './kefaya1419shaaban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Kefaya1419shaabanPageRoutingModule
  ],
  declarations: [Kefaya1419shaabanPage]
})
export class Kefaya1419shaabanPageModule {}
