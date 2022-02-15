import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyatQuraanMp3PageRoutingModule } from './ayat-quraan-mp3-routing.module';

import { AyatQuraanMp3Page } from './ayat-quraan-mp3.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AyatQuraanMp3PageRoutingModule,
        TranslateModule
    ],
  declarations: [AyatQuraanMp3Page]
})
export class AyatQuraanMp3PageModule {}
