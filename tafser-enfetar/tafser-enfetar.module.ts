import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserEnfetarPageRoutingModule } from './tafser-enfetar-routing.module';

import { TafserEnfetarPage } from './tafser-enfetar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserEnfetarPageRoutingModule
  ],
  declarations: [TafserEnfetarPage]
})
export class TafserEnfetarPageModule {}
