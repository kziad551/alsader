import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedMp3PageRoutingModule } from './khotabalsayed-mp3-routing.module';

import { KhotabalsayedMp3Page } from './khotabalsayed-mp3.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedMp3PageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedMp3Page]
})
export class KhotabalsayedMp3PageModule {}
