import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AldurusTafserPageRoutingModule } from './aldurus-tafser-routing.module';

import { AldurusTafserPage } from './aldurus-tafser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AldurusTafserPageRoutingModule
  ],
  declarations: [AldurusTafserPage]
})
export class AldurusTafserPageModule {}
