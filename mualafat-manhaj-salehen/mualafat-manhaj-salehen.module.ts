import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatManhajSalehenPageRoutingModule } from './mualafat-manhaj-salehen-routing.module';

import { MualafatManhajSalehenPage } from './mualafat-manhaj-salehen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatManhajSalehenPageRoutingModule
  ],
  declarations: [MualafatManhajSalehenPage]
})
export class MualafatManhajSalehenPageModule {}
