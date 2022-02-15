import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa10PageRoutingModule } from './khotabalsayed-ad3eya-ekraa10-routing.module';

import { KhotabalsayedAd3eyaEkraa10Page } from './khotabalsayed-ad3eya-ekraa10.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa10PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa10Page]
})
export class KhotabalsayedAd3eyaEkraa10PageModule {}
