import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulSabe3AlawalPageRoutingModule } from './alusul-sabe3-alawal-routing.module';

import { AlusulSabe3AlawalPage } from './alusul-sabe3-alawal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulSabe3AlawalPageRoutingModule
  ],
  declarations: [AlusulSabe3AlawalPage]
})
export class AlusulSabe3AlawalPageModule {}
