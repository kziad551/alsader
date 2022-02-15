import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedQuraanPageRoutingModule } from './khotabalsayed-quraan-routing.module';

import { KhotabalsayedQuraanPage } from './khotabalsayed-quraan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhotabalsayedQuraanPageRoutingModule
  ],
  declarations: [KhotabalsayedQuraanPage]
})
export class KhotabalsayedQuraanPageModule {}
