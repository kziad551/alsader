import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaaHananaEqra2J5PageRoutingModule } from './lekaa-hanana-eqra2-j5-routing.module';

import { LekaaHananaEqra2J5Page } from './lekaa-hanana-eqra2-j5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaaHananaEqra2J5PageRoutingModule
  ],
  declarations: [LekaaHananaEqra2J5Page]
})
export class LekaaHananaEqra2J5PageModule {}
