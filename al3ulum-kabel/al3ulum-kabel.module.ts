import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Al3ulumKabelPageRoutingModule } from './al3ulum-kabel-routing.module';

import { Al3ulumKabelPage } from './al3ulum-kabel.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Al3ulumKabelPageRoutingModule,
        TranslateModule
    ],
  declarations: [Al3ulumKabelPage]
})
export class Al3ulumKabelPageModule {}
