import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulRajabPageRoutingModule } from './alusul-rajab-routing.module';

import { AlusulRajabPage } from './alusul-rajab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulRajabPageRoutingModule
  ],
  declarations: [AlusulRajabPage]
})
export class AlusulRajabPageModule {}
