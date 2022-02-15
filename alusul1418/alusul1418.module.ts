import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alusul1418PageRoutingModule } from './alusul1418-routing.module';

import { Alusul1418Page } from './alusul1418.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alusul1418PageRoutingModule
  ],
  declarations: [Alusul1418Page]
})
export class Alusul1418PageModule {}
