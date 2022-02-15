import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShaaban1418PageRoutingModule } from './alusul-shaaban1418-routing.module';

import { AlusulShaaban1418Page } from './alusul-shaaban1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShaaban1418PageRoutingModule
  ],
  declarations: [AlusulShaaban1418Page]
})
export class AlusulShaaban1418PageModule {}
