import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulRajab1419PageRoutingModule } from './alusul-rajab1419-routing.module';

import { AlusulRajab1419Page } from './alusul-rajab1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulRajab1419PageRoutingModule
  ],
  declarations: [AlusulRajab1419Page]
})
export class AlusulRajab1419PageModule {}
