import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SayedMarkadalamerImgPageRoutingModule } from './sayed-markadalamer-img-routing.module';

import { SayedMarkadalamerImgPage } from './sayed-markadalamer-img.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SayedMarkadalamerImgPageRoutingModule,
        TranslateModule
    ],
  declarations: [SayedMarkadalamerImgPage]
})
export class SayedMarkadalamerImgPageModule {}
