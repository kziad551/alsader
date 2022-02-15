import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarahelEmaarMarkadPageRoutingModule } from './marahel-emaar-markad-routing.module';

import { MarahelEmaarMarkadPage } from './marahel-emaar-markad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarahelEmaarMarkadPageRoutingModule
  ],
  declarations: [MarahelEmaarMarkadPage]
})
export class MarahelEmaarMarkadPageModule {}
