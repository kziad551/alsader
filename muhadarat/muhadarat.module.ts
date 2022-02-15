import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuhadaratPageRoutingModule } from './muhadarat-routing.module';

import { MuhadaratPage } from './muhadarat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuhadaratPageRoutingModule
  ],
  declarations: [MuhadaratPage]
})
export class MuhadaratPageModule {}
