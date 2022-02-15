import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa19PageRoutingModule } from './khotabalsayed-ad3eya-ekraa19-routing.module';

import { KhotabalsayedAd3eyaEkraa19Page } from './khotabalsayed-ad3eya-ekraa19.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa19PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa19Page]
})
export class KhotabalsayedAd3eyaEkraa19PageModule {}
