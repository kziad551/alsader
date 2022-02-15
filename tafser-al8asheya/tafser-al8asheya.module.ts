import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAl8asheyaPageRoutingModule } from './tafser-al8asheya-routing.module';

import { TafserAl8asheyaPage } from './tafser-al8asheya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAl8asheyaPageRoutingModule
  ],
  declarations: [TafserAl8asheyaPage]
})
export class TafserAl8asheyaPageModule {}
