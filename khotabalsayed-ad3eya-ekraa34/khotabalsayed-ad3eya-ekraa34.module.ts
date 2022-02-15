import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa34PageRoutingModule } from './khotabalsayed-ad3eya-ekraa34-routing.module';

import { KhotabalsayedAd3eyaEkraa34Page } from './khotabalsayed-ad3eya-ekraa34.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa34PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa34Page]
})
export class KhotabalsayedAd3eyaEkraa34PageModule {}
