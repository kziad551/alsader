import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa40PageRoutingModule } from './khotabalsayed-ad3eya-ekraa40-routing.module';

import { KhotabalsayedAd3eyaEkraa40Page } from './khotabalsayed-ad3eya-ekraa40.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa40PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa40Page]
})
export class KhotabalsayedAd3eyaEkraa40PageModule {}
