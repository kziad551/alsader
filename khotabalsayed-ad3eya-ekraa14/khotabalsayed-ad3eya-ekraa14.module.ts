import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa14PageRoutingModule } from './khotabalsayed-ad3eya-ekraa14-routing.module';

import { KhotabalsayedAd3eyaEkraa14Page } from './khotabalsayed-ad3eya-ekraa14.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa14PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa14Page]
})
export class KhotabalsayedAd3eyaEkraa14PageModule {}
