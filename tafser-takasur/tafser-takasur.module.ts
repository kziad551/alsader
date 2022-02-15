import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserTakasurPageRoutingModule } from './tafser-takasur-routing.module';

import { TafserTakasurPage } from './tafser-takasur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserTakasurPageRoutingModule
  ],
  declarations: [TafserTakasurPage]
})
export class TafserTakasurPageModule {}
