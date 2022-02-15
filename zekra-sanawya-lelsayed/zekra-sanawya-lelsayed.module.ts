import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZekraSanawyaLelsayedPageRoutingModule } from './zekra-sanawya-lelsayed-routing.module';

import { ZekraSanawyaLelsayedPage } from './zekra-sanawya-lelsayed.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ZekraSanawyaLelsayedPageRoutingModule,
        TranslateModule
    ],
  declarations: [ZekraSanawyaLelsayedPage]
})
export class ZekraSanawyaLelsayedPageModule {}
