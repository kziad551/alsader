import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa24PageRoutingModule } from './khotabalsayed-ad3eya-ekraa24-routing.module';

import { KhotabalsayedAd3eyaEkraa24Page } from './khotabalsayed-ad3eya-ekraa24.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa24PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa24Page]
})
export class KhotabalsayedAd3eyaEkraa24PageModule {}
