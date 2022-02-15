import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatManhajUsulPageRoutingModule } from './mualafat-manhaj-usul-routing.module';

import { MualafatManhajUsulPage } from './mualafat-manhaj-usul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatManhajUsulPageRoutingModule
  ],
  declarations: [MualafatManhajUsulPage]
})
export class MualafatManhajUsulPageModule {}
