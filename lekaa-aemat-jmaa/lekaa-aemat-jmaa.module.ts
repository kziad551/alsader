import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaaAematJmaaPageRoutingModule } from './lekaa-aemat-jmaa-routing.module';

import { LekaaAematJmaaPage } from './lekaa-aemat-jmaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekaaAematJmaaPageRoutingModule
  ],
  declarations: [LekaaAematJmaaPage]
})
export class LekaaAematJmaaPageModule {}
