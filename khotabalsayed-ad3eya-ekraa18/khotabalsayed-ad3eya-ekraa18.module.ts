import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa18PageRoutingModule } from './khotabalsayed-ad3eya-ekraa18-routing.module';

import { KhotabalsayedAd3eyaEkraa18Page } from './khotabalsayed-ad3eya-ekraa18.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa18PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa18Page]
})
export class KhotabalsayedAd3eyaEkraa18PageModule {}
