import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserKuryshPageRoutingModule } from './tafser-kurysh-routing.module';

import { TafserKuryshPage } from './tafser-kurysh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserKuryshPageRoutingModule
  ],
  declarations: [TafserKuryshPage]
})
export class TafserKuryshPageModule {}
