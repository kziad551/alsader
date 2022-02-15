import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlaserPageRoutingModule } from './tafser-alaser-routing.module';

import { TafserAlaserPage } from './tafser-alaser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlaserPageRoutingModule
  ],
  declarations: [TafserAlaserPage]
})
export class TafserAlaserPageModule {}
