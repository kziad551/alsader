import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa4PageRoutingModule } from './khotabalsayed-ad3eya-ekraa4-routing.module';

import { KhotabalsayedAd3eyaEkraa4Page } from './khotabalsayed-ad3eya-ekraa4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa4PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa4Page]
})
export class KhotabalsayedAd3eyaEkraa4PageModule {}
