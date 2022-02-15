import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlHetafatMp3PageRoutingModule } from './al-hetafat-mp3-routing.module';

import { AlHetafatMp3Page } from './al-hetafat-mp3.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlHetafatMp3PageRoutingModule,
        TranslateModule
    ],
  declarations: [AlHetafatMp3Page]
})
export class AlHetafatMp3PageModule {}
