import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Shaara2PageRoutingModule } from './shaara2-routing.module';

import { Shaara2Page } from './shaara2.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Shaara2PageRoutingModule,
        TranslateModule
    ],
  declarations: [Shaara2Page]
})
export class Shaara2PageModule {}
