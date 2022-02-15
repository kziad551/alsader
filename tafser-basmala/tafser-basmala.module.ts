import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserBasmalaPageRoutingModule } from './tafser-basmala-routing.module';

import { TafserBasmalaPage } from './tafser-basmala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserBasmalaPageRoutingModule
  ],
  declarations: [TafserBasmalaPage]
})
export class TafserBasmalaPageModule {}
