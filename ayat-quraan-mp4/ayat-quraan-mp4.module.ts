import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyatQuraanMp4PageRoutingModule } from './ayat-quraan-mp4-routing.module';

import { AyatQuraanMp4Page } from './ayat-quraan-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AyatQuraanMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [AyatQuraanMp4Page]
})
export class AyatQuraanMp4PageModule {}
