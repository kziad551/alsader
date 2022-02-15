import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa8PageRoutingModule } from './khotabalsayed-ad3eya-ekraa8-routing.module';

import { KhotabalsayedAd3eyaEkraa8Page } from './khotabalsayed-ad3eya-ekraa8.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa8PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa8Page]
})
export class KhotabalsayedAd3eyaEkraa8PageModule {}
