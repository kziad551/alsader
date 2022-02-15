import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAbasPageRoutingModule } from './tafser-abas-routing.module';

import { TafserAbasPage } from './tafser-abas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAbasPageRoutingModule
  ],
  declarations: [TafserAbasPage]
})
export class TafserAbasPageModule {}
