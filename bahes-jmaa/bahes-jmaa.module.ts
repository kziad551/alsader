import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BahesJmaaPageRoutingModule } from './bahes-jmaa-routing.module';

import { BahesJmaaPage } from './bahes-jmaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BahesJmaaPageRoutingModule
  ],
  declarations: [BahesJmaaPage]
})
export class BahesJmaaPageModule {}
