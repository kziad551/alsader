import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserEkhlasPageRoutingModule } from './tafser-ekhlas-routing.module';

import { TafserEkhlasPage } from './tafser-ekhlas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserEkhlasPageRoutingModule
  ],
  declarations: [TafserEkhlasPage]
})
export class TafserEkhlasPageModule {}
