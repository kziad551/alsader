import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAltarekPageRoutingModule } from './tafser-altarek-routing.module';

import { TafserAltarekPage } from './tafser-altarek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAltarekPageRoutingModule
  ],
  declarations: [TafserAltarekPage]
})
export class TafserAltarekPageModule {}
