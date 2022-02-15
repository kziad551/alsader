import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaMp4PageRoutingModule } from './khotabalsayed-ad3eya-mp4-routing.module';

import { KhotabalsayedAd3eyaMp4Page } from './khotabalsayed-ad3eya-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaMp4Page]
})
export class KhotabalsayedAd3eyaMp4PageModule {}
