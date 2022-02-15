import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulShaherMuharamPageRoutingModule } from './alusul-shaher-muharam-routing.module';

import { AlusulShaherMuharamPage } from './alusul-shaher-muharam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulShaherMuharamPageRoutingModule
  ],
  declarations: [AlusulShaherMuharamPage]
})
export class AlusulShaherMuharamPageModule {}
