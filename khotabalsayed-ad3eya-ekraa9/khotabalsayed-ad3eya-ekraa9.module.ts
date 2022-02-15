import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa9PageRoutingModule } from './khotabalsayed-ad3eya-ekraa9-routing.module';

import { KhotabalsayedAd3eyaEkraa9Page } from './khotabalsayed-ad3eya-ekraa9.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa9PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa9Page]
})
export class KhotabalsayedAd3eyaEkraa9PageModule {}
