import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlkawtharPageRoutingModule } from './tafser-alkawthar-routing.module';

import { TafserAlkawtharPage } from './tafser-alkawthar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlkawtharPageRoutingModule
  ],
  declarations: [TafserAlkawtharPage]
})
export class TafserAlkawtharPageModule {}
