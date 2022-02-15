import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulAkaedShajzratPageRoutingModule } from './alusul-akaed-shajzrat-routing.module';

import { AlusulAkaedShajzratPage } from './alusul-akaed-shajzrat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulAkaedShajzratPageRoutingModule
  ],
  declarations: [AlusulAkaedShajzratPage]
})
export class AlusulAkaedShajzratPageModule {}
