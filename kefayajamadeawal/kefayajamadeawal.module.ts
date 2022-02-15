import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KefayajamadeawalPageRoutingModule } from './kefayajamadeawal-routing.module';

import { KefayajamadeawalPage } from './kefayajamadeawal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KefayajamadeawalPageRoutingModule
  ],
  declarations: [KefayajamadeawalPage]
})
export class KefayajamadeawalPageModule {}
