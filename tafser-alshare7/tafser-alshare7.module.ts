import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlshare7PageRoutingModule } from './tafser-alshare7-routing.module';

import { TafserAlshare7Page } from './tafser-alshare7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlshare7PageRoutingModule
  ],
  declarations: [TafserAlshare7Page]
})
export class TafserAlshare7PageModule {}
