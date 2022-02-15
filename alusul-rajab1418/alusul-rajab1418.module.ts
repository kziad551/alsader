import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulRajab1418PageRoutingModule } from './alusul-rajab1418-routing.module';

import { AlusulRajab1418Page } from './alusul-rajab1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulRajab1418PageRoutingModule
  ],
  declarations: [AlusulRajab1418Page]
})
export class AlusulRajab1418PageModule {}
