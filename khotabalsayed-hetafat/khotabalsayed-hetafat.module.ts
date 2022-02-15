import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedHetafatPageRoutingModule } from './khotabalsayed-hetafat-routing.module';

import { KhotabalsayedHetafatPage } from './khotabalsayed-hetafat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhotabalsayedHetafatPageRoutingModule
  ],
  declarations: [KhotabalsayedHetafatPage]
})
export class KhotabalsayedHetafatPageModule {}
