import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlhamzaPageRoutingModule } from './tafser-alhamza-routing.module';

import { TafserAlhamzaPage } from './tafser-alhamza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlhamzaPageRoutingModule
  ],
  declarations: [TafserAlhamzaPage]
})
export class TafserAlhamzaPageModule {}
