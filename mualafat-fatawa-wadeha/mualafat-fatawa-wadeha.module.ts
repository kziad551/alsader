import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatFatawaWadehaPageRoutingModule } from './mualafat-fatawa-wadeha-routing.module';

import { MualafatFatawaWadehaPage } from './mualafat-fatawa-wadeha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatFatawaWadehaPageRoutingModule
  ],
  declarations: [MualafatFatawaWadehaPage]
})
export class MualafatFatawaWadehaPageModule {}
