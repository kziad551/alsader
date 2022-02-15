import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlkare3aPageRoutingModule } from './tafser-alkare3a-routing.module';

import { TafserAlkare3aPage } from './tafser-alkare3a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlkare3aPageRoutingModule
  ],
  declarations: [TafserAlkare3aPage]
})
export class TafserAlkare3aPageModule {}
