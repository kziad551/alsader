import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa44PageRoutingModule } from './khotabalsayed-ad3eya-ekraa44-routing.module';

import { KhotabalsayedAd3eyaEkraa44Page } from './khotabalsayed-ad3eya-ekraa44.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhotabalsayedAd3eyaEkraa44PageRoutingModule,
    TranslateModule
  ],
  declarations: [KhotabalsayedAd3eyaEkraa44Page]
})
export class KhotabalsayedAd3eyaEkraa44PageModule {}
