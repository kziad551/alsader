import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserBe2aPageRoutingModule } from './tafser-be2a-routing.module';

import { TafserBe2aPage } from './tafser-be2a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserBe2aPageRoutingModule
  ],
  declarations: [TafserBe2aPage]
})
export class TafserBe2aPageModule {}
