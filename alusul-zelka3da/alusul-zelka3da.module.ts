import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulZelka3daPageRoutingModule } from './alusul-zelka3da-routing.module';

import { AlusulZelka3daPage } from './alusul-zelka3da.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulZelka3daPageRoutingModule
  ],
  declarations: [AlusulZelka3daPage]
})
export class AlusulZelka3daPageModule {}
