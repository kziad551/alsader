import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAl3adeyatPageRoutingModule } from './tafser-al3adeyat-routing.module';

import { TafserAl3adeyatPage } from './tafser-al3adeyat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAl3adeyatPageRoutingModule
  ],
  declarations: [TafserAl3adeyatPage]
})
export class TafserAl3adeyatPageModule {}
