import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZekraSanawyaLelsayedSuwarPageRoutingModule } from './zekra-sanawya-lelsayed-suwar-routing.module';

import { ZekraSanawyaLelsayedSuwarPage } from './zekra-sanawya-lelsayed-suwar.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ZekraSanawyaLelsayedSuwarPageRoutingModule,
        TranslateModule
    ],
  declarations: [ZekraSanawyaLelsayedSuwarPage]
})
export class ZekraSanawyaLelsayedSuwarPageModule {}
