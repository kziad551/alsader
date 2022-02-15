import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakreratKabelBaadPageRoutingModule } from './takrerat-kabel-baad-routing.module';

import { TakreratKabelBaadPage } from './takrerat-kabel-baad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakreratKabelBaadPageRoutingModule
  ],
  declarations: [TakreratKabelBaadPage]
})
export class TakreratKabelBaadPageModule {}
