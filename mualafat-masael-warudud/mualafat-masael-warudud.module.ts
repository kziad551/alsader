import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatMasaelWarududPageRoutingModule } from './mualafat-masael-warudud-routing.module';

import { MualafatMasaelWarududPage } from './mualafat-masael-warudud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatMasaelWarududPageRoutingModule
  ],
  declarations: [MualafatMasaelWarududPage]
})
export class MualafatMasaelWarududPageModule {}
