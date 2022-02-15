import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa36PageRoutingModule } from './khotabalsayed-ad3eya-ekraa36-routing.module';

import { KhotabalsayedAd3eyaEkraa36Page } from './khotabalsayed-ad3eya-ekraa36.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa36PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa36Page]
})
export class KhotabalsayedAd3eyaEkraa36PageModule {}
