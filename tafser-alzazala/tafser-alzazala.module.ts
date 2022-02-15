import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlzazalaPageRoutingModule } from './tafser-alzazala-routing.module';

import { TafserAlzazalaPage } from './tafser-alzazala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlzazalaPageRoutingModule
  ],
  declarations: [TafserAlzazalaPage]
})
export class TafserAlzazalaPageModule {}
