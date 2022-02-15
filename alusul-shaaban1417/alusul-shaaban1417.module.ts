import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShaaban1417PageRoutingModule } from './alusul-shaaban1417-routing.module';

import { AlusulShaaban1417Page } from './alusul-shaaban1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShaaban1417PageRoutingModule
  ],
  declarations: [AlusulShaaban1417Page]
})
export class AlusulShaaban1417PageModule {}
