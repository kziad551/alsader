import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlLatmeyatMp4PageRoutingModule } from './al-latmeyat-mp4-routing.module';

import { AlLatmeyatMp4Page } from './al-latmeyat-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlLatmeyatMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [AlLatmeyatMp4Page]
})
export class AlLatmeyatMp4PageModule {}
