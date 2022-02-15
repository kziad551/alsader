import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserNaba2PageRoutingModule } from './tafser-naba2-routing.module';

import { TafserNaba2Page } from './tafser-naba2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserNaba2PageRoutingModule
  ],
  declarations: [TafserNaba2Page]
})
export class TafserNaba2PageModule {}
