import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa16PageRoutingModule } from './khotabalsayed-ad3eya-ekraa16-routing.module';

import { KhotabalsayedAd3eyaEkraa16Page } from './khotabalsayed-ad3eya-ekraa16.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraa16PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraa16Page]
})
export class KhotabalsayedAd3eyaEkraa16PageModule {}
