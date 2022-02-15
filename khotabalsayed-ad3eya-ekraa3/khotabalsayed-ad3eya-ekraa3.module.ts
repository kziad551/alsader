import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa3PageRoutingModule } from './khotabalsayed-ad3eya-ekraa3-routing.module';

import { KhotabalsayedAd3eyaEkraa3Page } from './khotabalsayed-ad3eya-ekraa3.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa3PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa3Page]
})
export class KhotabalsayedAd3eyaEkraa3PageModule {}
