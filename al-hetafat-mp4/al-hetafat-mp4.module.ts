import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlHetafatMp4PageRoutingModule } from './al-hetafat-mp4-routing.module';

import { AlHetafatMp4Page } from './al-hetafat-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlHetafatMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [AlHetafatMp4Page]
})
export class AlHetafatMp4PageModule {}
