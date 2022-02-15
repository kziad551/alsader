import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserEsra2PageRoutingModule } from './tafser-esra2-routing.module';

import { TafserEsra2Page } from './tafser-esra2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserEsra2PageRoutingModule
  ],
  declarations: [TafserEsra2Page]
})
export class TafserEsra2PageModule {}
