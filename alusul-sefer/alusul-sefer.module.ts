import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulSeferPageRoutingModule } from './alusul-sefer-routing.module';

import { AlusulSeferPage } from './alusul-sefer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulSeferPageRoutingModule
  ],
  declarations: [AlusulSeferPage]
})
export class AlusulSeferPageModule {}
