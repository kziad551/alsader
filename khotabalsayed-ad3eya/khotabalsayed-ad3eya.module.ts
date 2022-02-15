import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaPageRoutingModule } from './khotabalsayed-ad3eya-routing.module';

import { KhotabalsayedAd3eyaPage } from './khotabalsayed-ad3eya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhotabalsayedAd3eyaPageRoutingModule
  ],
  declarations: [KhotabalsayedAd3eyaPage]
})
export class KhotabalsayedAd3eyaPageModule {}
