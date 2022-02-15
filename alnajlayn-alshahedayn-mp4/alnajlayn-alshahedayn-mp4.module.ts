import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynMp4PageRoutingModule } from './alnajlayn-alshahedayn-mp4-routing.module';

import { AlnajlaynAlshahedaynMp4Page } from './alnajlayn-alshahedayn-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlnajlaynAlshahedaynMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [AlnajlaynAlshahedaynMp4Page]
})
export class AlnajlaynAlshahedaynMp4PageModule {}
