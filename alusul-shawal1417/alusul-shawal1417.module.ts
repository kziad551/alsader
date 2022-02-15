import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShawal1417PageRoutingModule } from './alusul-shawal1417-routing.module';

import { AlusulShawal1417Page } from './alusul-shawal1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShawal1417PageRoutingModule
  ],
  declarations: [AlusulShawal1417Page]
})
export class AlusulShawal1417PageModule {}
