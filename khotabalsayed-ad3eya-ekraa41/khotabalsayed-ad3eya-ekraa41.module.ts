import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa41PageRoutingModule } from './khotabalsayed-ad3eya-ekraa41-routing.module';

import { KhotabalsayedAd3eyaEkraa41Page } from './khotabalsayed-ad3eya-ekraa41.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa41PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa41Page]
})
export class KhotabalsayedAd3eyaEkraa41PageModule {}
