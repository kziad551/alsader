import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa32PageRoutingModule } from './khotabalsayed-ad3eya-ekraa32-routing.module';

import { KhotabalsayedAd3eyaEkraa32Page } from './khotabalsayed-ad3eya-ekraa32.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa32PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa32Page]
})
export class KhotabalsayedAd3eyaEkraa32PageModule {}
