import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAltenPageRoutingModule } from './tafser-alten-routing.module';

import { TafserAltenPage } from './tafser-alten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAltenPageRoutingModule
  ],
  declarations: [TafserAltenPage]
})
export class TafserAltenPageModule {}
