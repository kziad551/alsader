import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa22PageRoutingModule } from './khotabalsayed-ad3eya-ekraa22-routing.module';

import { KhotabalsayedAd3eyaEkraa22Page } from './khotabalsayed-ad3eya-ekraa22.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa22PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa22Page]
})
export class KhotabalsayedAd3eyaEkraa22PageModule {}
