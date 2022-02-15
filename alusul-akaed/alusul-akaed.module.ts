import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulAkaedPageRoutingModule } from './alusul-akaed-routing.module';

import { AlusulAkaedPage } from './alusul-akaed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulAkaedPageRoutingModule
  ],
  declarations: [AlusulAkaedPage]
})
export class AlusulAkaedPageModule {}
