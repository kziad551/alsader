import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa21PageRoutingModule } from './khotabalsayed-ad3eya-ekraa21-routing.module';

import { KhotabalsayedAd3eyaEkraa21Page } from './khotabalsayed-ad3eya-ekraa21.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa21PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa21Page]
})
export class KhotabalsayedAd3eyaEkraa21PageModule {}
