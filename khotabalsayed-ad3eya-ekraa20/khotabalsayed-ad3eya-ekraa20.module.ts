import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa20PageRoutingModule } from './khotabalsayed-ad3eya-ekraa20-routing.module';

import { KhotabalsayedAd3eyaEkraa20Page } from './khotabalsayed-ad3eya-ekraa20.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa20PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa20Page]
})
export class KhotabalsayedAd3eyaEkraa20PageModule {}
