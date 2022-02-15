import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AldurusFekehPageRoutingModule } from './aldurus-fekeh-routing.module';

import { AldurusFekehPage } from './aldurus-fekeh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AldurusFekehPageRoutingModule
  ],
  declarations: [AldurusFekehPage]
})
export class AldurusFekehPageModule {}
