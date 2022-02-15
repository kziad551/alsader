import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa30PageRoutingModule } from './khotabalsayed-ad3eya-ekraa30-routing.module';

import { KhotabalsayedAd3eyaEkraa30Page } from './khotabalsayed-ad3eya-ekraa30.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa30PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa30Page]
})
export class KhotabalsayedAd3eyaEkraa30PageModule {}
