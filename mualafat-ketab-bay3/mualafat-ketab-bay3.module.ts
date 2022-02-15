import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatKetabBay3PageRoutingModule } from './mualafat-ketab-bay3-routing.module';

import { MualafatKetabBay3Page } from './mualafat-ketab-bay3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatKetabBay3PageRoutingModule
  ],
  declarations: [MualafatKetabBay3Page]
})
export class MualafatKetabBay3PageModule {}
