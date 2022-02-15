import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa26PageRoutingModule } from './khotabalsayed-ad3eya-ekraa26-routing.module';

import { KhotabalsayedAd3eyaEkraa26Page } from './khotabalsayed-ad3eya-ekraa26.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa26PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa26Page]
})
export class KhotabalsayedAd3eyaEkraa26PageModule {}
