import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserTakwerPageRoutingModule } from './tafser-takwer-routing.module';

import { TafserTakwerPage } from './tafser-takwer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserTakwerPageRoutingModule
  ],
  declarations: [TafserTakwerPage]
})
export class TafserTakwerPageModule {}
