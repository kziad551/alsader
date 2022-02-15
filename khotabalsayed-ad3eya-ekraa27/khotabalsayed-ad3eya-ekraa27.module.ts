import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa27PageRoutingModule } from './khotabalsayed-ad3eya-ekraa27-routing.module';

import { KhotabalsayedAd3eyaEkraa27Page } from './khotabalsayed-ad3eya-ekraa27.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa27PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa27Page]
})
export class KhotabalsayedAd3eyaEkraa27PageModule {}
