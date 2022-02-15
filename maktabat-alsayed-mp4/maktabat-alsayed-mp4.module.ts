import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaktabatAlsayedMp4PageRoutingModule } from './maktabat-alsayed-mp4-routing.module';

import { MaktabatAlsayedMp4Page } from './maktabat-alsayed-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MaktabatAlsayedMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [MaktabatAlsayedMp4Page]
})
export class MaktabatAlsayedMp4PageModule {}
