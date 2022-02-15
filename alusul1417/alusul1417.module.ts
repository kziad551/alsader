import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alusul1417PageRoutingModule } from './alusul1417-routing.module';

import { Alusul1417Page } from './alusul1417.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alusul1417PageRoutingModule
  ],
  declarations: [Alusul1417Page]
})
export class Alusul1417PageModule {}
