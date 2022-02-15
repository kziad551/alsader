import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShaaban1419PageRoutingModule } from './alusul-shaaban1419-routing.module';

import { AlusulShaaban1419Page } from './alusul-shaaban1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShaaban1419PageRoutingModule
  ],
  declarations: [AlusulShaaban1419Page]
})
export class AlusulShaaban1419PageModule {}
