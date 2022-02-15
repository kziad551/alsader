import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatFekehAkhlakPageRoutingModule } from './mualafat-fekeh-akhlak-routing.module';

import { MualafatFekehAkhlakPage } from './mualafat-fekeh-akhlak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatFekehAkhlakPageRoutingModule
  ],
  declarations: [MualafatFekehAkhlakPage]
})
export class MualafatFekehAkhlakPageModule {}
