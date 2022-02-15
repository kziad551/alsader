import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlkuraanBaadPageRoutingModule } from './alkuraan-baad-routing.module';

import { AlkuraanBaadPage } from './alkuraan-baad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlkuraanBaadPageRoutingModule
  ],
  declarations: [AlkuraanBaadPage]
})
export class AlkuraanBaadPageModule {}
