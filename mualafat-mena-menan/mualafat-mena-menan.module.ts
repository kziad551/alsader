import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatMenaMenanPageRoutingModule } from './mualafat-mena-menan-routing.module';

import { MualafatMenaMenanPage } from './mualafat-mena-menan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatMenaMenanPageRoutingModule
  ],
  declarations: [MualafatMenaMenanPage]
})
export class MualafatMenaMenanPageModule {}
