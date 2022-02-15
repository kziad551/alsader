import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShawal1418PageRoutingModule } from './alusul-shawal1418-routing.module';

import { AlusulShawal1418Page } from './alusul-shawal1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShawal1418PageRoutingModule
  ],
  declarations: [AlusulShawal1418Page]
})
export class AlusulShawal1418PageModule {}
