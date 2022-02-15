import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserMa3uztynPageRoutingModule } from './tafser-ma3uztyn-routing.module';

import { TafserMa3uztynPage } from './tafser-ma3uztyn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserMa3uztynPageRoutingModule
  ],
  declarations: [TafserMa3uztynPage]
})
export class TafserMa3uztynPageModule {}
