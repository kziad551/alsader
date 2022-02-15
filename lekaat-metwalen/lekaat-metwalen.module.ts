import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaatMetwalenPageRoutingModule } from './lekaat-metwalen-routing.module';

import { LekaatMetwalenPage } from './lekaat-metwalen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaatMetwalenPageRoutingModule
  ],
  declarations: [LekaatMetwalenPage]
})
export class LekaatMetwalenPageModule {}
