import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserEnshekakPageRoutingModule } from './tafser-enshekak-routing.module';

import { TafserEnshekakPage } from './tafser-enshekak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserEnshekakPageRoutingModule
  ],
  declarations: [TafserEnshekakPage]
})
export class TafserEnshekakPageModule {}
