import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaMp3PageRoutingModule } from './khotabalsayed-ad3eya-mp3-routing.module';

import { KhotabalsayedAd3eyaMp3Page } from './khotabalsayed-ad3eya-mp3.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaMp3PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaMp3Page]
})
export class KhotabalsayedAd3eyaMp3PageModule {}
