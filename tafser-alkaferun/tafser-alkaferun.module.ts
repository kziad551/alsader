import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlkaferunPageRoutingModule } from './tafser-alkaferun-routing.module';

import { TafserAlkaferunPage } from './tafser-alkaferun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlkaferunPageRoutingModule
  ],
  declarations: [TafserAlkaferunPage]
})
export class TafserAlkaferunPageModule {}
