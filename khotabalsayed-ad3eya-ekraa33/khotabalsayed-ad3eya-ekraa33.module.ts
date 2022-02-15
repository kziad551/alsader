import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa33PageRoutingModule } from './khotabalsayed-ad3eya-ekraa33-routing.module';

import { KhotabalsayedAd3eyaEkraa33Page } from './khotabalsayed-ad3eya-ekraa33.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa33PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa33Page]
})
export class KhotabalsayedAd3eyaEkraa33PageModule {}
