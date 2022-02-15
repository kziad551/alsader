import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserBurujPageRoutingModule } from './tafser-buruj-routing.module';

import { TafserBurujPage } from './tafser-buruj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserBurujPageRoutingModule
  ],
  declarations: [TafserBurujPage]
})
export class TafserBurujPageModule {}
