import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlLatmeyatMp3PageRoutingModule } from './al-latmeyat-mp3-routing.module';

import { AlLatmeyatMp3Page } from './al-latmeyat-mp3.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlLatmeyatMp3PageRoutingModule,
        TranslateModule
    ],
  declarations: [AlLatmeyatMp3Page]
})
export class AlLatmeyatMp3PageModule {}
