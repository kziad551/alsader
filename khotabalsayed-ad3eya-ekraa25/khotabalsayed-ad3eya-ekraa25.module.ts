import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa25PageRoutingModule } from './khotabalsayed-ad3eya-ekraa25-routing.module';

import { KhotabalsayedAd3eyaEkraa25Page } from './khotabalsayed-ad3eya-ekraa25.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa25PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa25Page]
})
export class KhotabalsayedAd3eyaEkraa25PageModule {}
