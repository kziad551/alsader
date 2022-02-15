import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa23PageRoutingModule } from './khotabalsayed-ad3eya-ekraa23-routing.module';

import { KhotabalsayedAd3eyaEkraa23Page } from './khotabalsayed-ad3eya-ekraa23.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa23PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa23Page]
})
export class KhotabalsayedAd3eyaEkraa23PageModule {}
