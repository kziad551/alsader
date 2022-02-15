import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShawal1419PageRoutingModule } from './alusul-shawal1419-routing.module';

import { AlusulShawal1419Page } from './alusul-shawal1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShawal1419PageRoutingModule
  ],
  declarations: [AlusulShawal1419Page]
})
export class AlusulShawal1419PageModule {}
