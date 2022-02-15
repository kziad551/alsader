import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlma3unPageRoutingModule } from './tafser-alma3un-routing.module';

import { TafserAlma3unPage } from './tafser-alma3un.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlma3unPageRoutingModule
  ],
  declarations: [TafserAlma3unPage]
})
export class TafserAlma3unPageModule {}
