import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa13PageRoutingModule } from './khotabalsayed-ad3eya-ekraa13-routing.module';

import { KhotabalsayedAd3eyaEkraa13Page } from './khotabalsayed-ad3eya-ekraa13.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa13PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa13Page]
})
export class KhotabalsayedAd3eyaEkraa13PageModule {}
