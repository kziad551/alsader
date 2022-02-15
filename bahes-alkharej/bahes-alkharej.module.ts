import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BahesAlkharejPageRoutingModule } from './bahes-alkharej-routing.module';

import { BahesAlkharejPage } from './bahes-alkharej.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BahesAlkharejPageRoutingModule
  ],
  declarations: [BahesAlkharejPage]
})
export class BahesAlkharejPageModule {}
