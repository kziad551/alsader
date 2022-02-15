import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa2PageRoutingModule } from './khotabalsayed-ad3eya-ekraa2-routing.module';

import { KhotabalsayedAd3eyaEkraa2Page } from './khotabalsayed-ad3eya-ekraa2.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa2PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa2Page]
})
export class KhotabalsayedAd3eyaEkraa2PageModule {}
