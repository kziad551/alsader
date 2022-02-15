import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakreratKabelPageRoutingModule } from './takrerat-kabel-routing.module';

import { TakreratKabelPage } from './takrerat-kabel.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TakreratKabelPageRoutingModule,
        TranslateModule
    ],
  declarations: [TakreratKabelPage]
})
export class TakreratKabelPageModule {}
