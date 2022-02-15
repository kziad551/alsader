import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa11PageRoutingModule } from './khotabalsayed-ad3eya-ekraa11-routing.module';

import { KhotabalsayedAd3eyaEkraa11Page } from './khotabalsayed-ad3eya-ekraa11.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa11PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa11Page]
})
export class KhotabalsayedAd3eyaEkraa11PageModule {}
