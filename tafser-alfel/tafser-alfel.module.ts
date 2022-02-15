import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlfelPageRoutingModule } from './tafser-alfel-routing.module';

import { TafserAlfelPage } from './tafser-alfel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlfelPageRoutingModule
  ],
  declarations: [TafserAlfelPage]
})
export class TafserAlfelPageModule {}
