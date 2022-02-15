import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShaabanPageRoutingModule } from './alusul-shaaban-routing.module';

import { AlusulShaabanPage } from './alusul-shaaban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShaabanPageRoutingModule
  ],
  declarations: [AlusulShaabanPage]
})
export class AlusulShaabanPageModule {}
