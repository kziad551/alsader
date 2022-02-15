import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlmsdPageRoutingModule } from './tafser-almsd-routing.module';

import { TafserAlmsdPage } from './tafser-almsd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlmsdPageRoutingModule
  ],
  declarations: [TafserAlmsdPage]
})
export class TafserAlmsdPageModule {}
