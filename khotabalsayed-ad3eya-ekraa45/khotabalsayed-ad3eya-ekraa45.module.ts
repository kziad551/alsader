import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa45PageRoutingModule } from './khotabalsayed-ad3eya-ekraa45-routing.module';

import { KhotabalsayedAd3eyaEkraa45Page } from './khotabalsayed-ad3eya-ekraa45.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa45PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa45Page]
})
export class KhotabalsayedAd3eyaEkraa45PageModule {}
