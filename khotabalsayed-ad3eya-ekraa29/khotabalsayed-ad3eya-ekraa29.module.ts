import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa29PageRoutingModule } from './khotabalsayed-ad3eya-ekraa29-routing.module';

import { KhotabalsayedAd3eyaEkraa29Page } from './khotabalsayed-ad3eya-ekraa29.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa29PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa29Page]
})
export class KhotabalsayedAd3eyaEkraa29PageModule {}
