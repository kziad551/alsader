import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa43PageRoutingModule } from './khotabalsayed-ad3eya-ekraa43-routing.module';

import { KhotabalsayedAd3eyaEkraa43Page } from './khotabalsayed-ad3eya-ekraa43.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa43PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa43Page]
})
export class KhotabalsayedAd3eyaEkraa43PageModule {}
