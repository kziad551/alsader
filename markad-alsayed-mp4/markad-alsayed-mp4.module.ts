import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkadAlsayedMp4PageRoutingModule } from './markad-alsayed-mp4-routing.module';

import { MarkadAlsayedMp4Page } from './markad-alsayed-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MarkadAlsayedMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [MarkadAlsayedMp4Page]
})
export class MarkadAlsayedMp4PageModule {}
