import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa12PageRoutingModule } from './khotabalsayed-ad3eya-ekraa12-routing.module';

import { KhotabalsayedAd3eyaEkraa12Page } from './khotabalsayed-ad3eya-ekraa12.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa12PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa12Page]
})
export class KhotabalsayedAd3eyaEkraa12PageModule {}
