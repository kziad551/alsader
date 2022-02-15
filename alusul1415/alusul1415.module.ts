import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alusul1415PageRoutingModule } from './alusul1415-routing.module';

import { Alusul1415Page } from './alusul1415.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alusul1415PageRoutingModule
  ],
  declarations: [Alusul1415Page]
})
export class Alusul1415PageModule {}
