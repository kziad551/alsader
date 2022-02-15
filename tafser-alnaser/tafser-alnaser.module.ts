import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlnaserPageRoutingModule } from './tafser-alnaser-routing.module';

import { TafserAlnaserPage } from './tafser-alnaser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlnaserPageRoutingModule
  ],
  declarations: [TafserAlnaserPage]
})
export class TafserAlnaserPageModule {}
