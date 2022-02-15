import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlalakPageRoutingModule } from './tafser-alalak-routing.module';

import { TafserAlalakPage } from './tafser-alalak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlalakPageRoutingModule
  ],
  declarations: [TafserAlalakPage]
})
export class TafserAlalakPageModule {}
