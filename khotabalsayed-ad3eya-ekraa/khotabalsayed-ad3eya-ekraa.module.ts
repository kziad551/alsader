import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraaPageRoutingModule } from './khotabalsayed-ad3eya-ekraa-routing.module';

import { KhotabalsayedAd3eyaEkraaPage } from './khotabalsayed-ad3eya-ekraa.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedAd3eyaEkraaPageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedAd3eyaEkraaPage]
})
export class KhotabalsayedAd3eyaEkraaPageModule {}
