import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShawal1415PageRoutingModule } from './alusul-shawal1415-routing.module';

import { AlusulShawal1415Page } from './alusul-shawal1415.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShawal1415PageRoutingModule
  ],
  declarations: [AlusulShawal1415Page]
})
export class AlusulShawal1415PageModule {}
