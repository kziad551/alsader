import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedLatmeyatPageRoutingModule } from './khotabalsayed-latmeyat-routing.module';

import { KhotabalsayedLatmeyatPage } from './khotabalsayed-latmeyat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhotabalsayedLatmeyatPageRoutingModule
  ],
  declarations: [KhotabalsayedLatmeyatPage]
})
export class KhotabalsayedLatmeyatPageModule {}
