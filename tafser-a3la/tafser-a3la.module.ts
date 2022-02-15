import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserA3laPageRoutingModule } from './tafser-a3la-routing.module';

import { TafserA3laPage } from './tafser-a3la.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserA3laPageRoutingModule
  ],
  declarations: [TafserA3laPage]
})
export class TafserA3laPageModule {}
