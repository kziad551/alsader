import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlusulZel7ejaPageRoutingModule } from './alusul-zel7eja-routing.module';

import { AlusulZel7ejaPage } from './alusul-zel7eja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlusulZel7ejaPageRoutingModule
  ],
  declarations: [AlusulZel7ejaPage]
})
export class AlusulZel7ejaPageModule {}
