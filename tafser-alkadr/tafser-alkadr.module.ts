import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlkadrPageRoutingModule } from './tafser-alkadr-routing.module';

import { TafserAlkadrPage } from './tafser-alkadr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlkadrPageRoutingModule
  ],
  declarations: [TafserAlkadrPage]
})
export class TafserAlkadrPageModule {}
