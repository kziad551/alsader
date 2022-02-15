import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa37PageRoutingModule } from './khotabalsayed-ad3eya-ekraa37-routing.module';

import { KhotabalsayedAd3eyaEkraa37Page } from './khotabalsayed-ad3eya-ekraa37.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa37PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa37Page]
})
export class KhotabalsayedAd3eyaEkraa37PageModule {}
