import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlfajerPageRoutingModule } from './tafser-alfajer-routing.module';

import { TafserAlfajerPage } from './tafser-alfajer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlfajerPageRoutingModule
  ],
  declarations: [TafserAlfajerPage]
})
export class TafserAlfajerPageModule {}
