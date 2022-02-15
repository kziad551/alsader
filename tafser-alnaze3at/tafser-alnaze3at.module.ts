import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlnaze3atPageRoutingModule } from './tafser-alnaze3at-routing.module';

import { TafserAlnaze3atPage } from './tafser-alnaze3at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlnaze3atPageRoutingModule
  ],
  declarations: [TafserAlnaze3atPage]
})
export class TafserAlnaze3atPageModule {}
