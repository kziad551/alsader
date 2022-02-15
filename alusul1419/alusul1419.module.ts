import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alusul1419PageRoutingModule } from './alusul1419-routing.module';

import { Alusul1419Page } from './alusul1419.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alusul1419PageRoutingModule
  ],
  declarations: [Alusul1419Page]
})
export class Alusul1419PageModule {}
