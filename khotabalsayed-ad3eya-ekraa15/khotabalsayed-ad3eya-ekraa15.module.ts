import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa15PageRoutingModule } from './khotabalsayed-ad3eya-ekraa15-routing.module';

import { KhotabalsayedAd3eyaEkraa15Page } from './khotabalsayed-ad3eya-ekraa15.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa15PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa15Page]
})
export class KhotabalsayedAd3eyaEkraa15PageModule {}
