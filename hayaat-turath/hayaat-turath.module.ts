import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HayaatTurathPageRoutingModule } from './hayaat-turath-routing.module';

import { HayaatTurathPage } from './hayaat-turath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HayaatTurathPageRoutingModule
  ],
  declarations: [HayaatTurathPage]
})
export class HayaatTurathPageModule {}
