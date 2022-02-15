import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulRajab1417PageRoutingModule } from './alusul-rajab1417-routing.module';

import { AlusulRajab1417Page } from './alusul-rajab1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulRajab1417PageRoutingModule
  ],
  declarations: [AlusulRajab1417Page]
})
export class AlusulRajab1417PageModule {}
