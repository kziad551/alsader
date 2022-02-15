import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserPageRoutingModule } from './tafser-routing.module';

import { TafserPage } from './tafser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserPageRoutingModule
  ],
  declarations: [TafserPage]
})
export class TafserPageModule {}
