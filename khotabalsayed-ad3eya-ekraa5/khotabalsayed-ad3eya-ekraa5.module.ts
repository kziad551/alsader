import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa5PageRoutingModule } from './khotabalsayed-ad3eya-ekraa5-routing.module';

import { KhotabalsayedAd3eyaEkraa5Page } from './khotabalsayed-ad3eya-ekraa5.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa5PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa5Page]
})
export class KhotabalsayedAd3eyaEkraa5PageModule {}
