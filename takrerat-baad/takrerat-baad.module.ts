import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakreratBaadPageRoutingModule } from './takrerat-baad-routing.module';

import { TakreratBaadPage } from './takrerat-baad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakreratBaadPageRoutingModule
  ],
  declarations: [TakreratBaadPage]
})
export class TakreratBaadPageModule {}
