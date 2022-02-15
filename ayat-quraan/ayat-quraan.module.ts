import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyatQuraanPageRoutingModule } from './ayat-quraan-routing.module';

import { AyatQuraanPage } from './ayat-quraan.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AyatQuraanPageRoutingModule,
        TranslateModule
    ],
  declarations: [AyatQuraanPage]
})
export class AyatQuraanPageModule {}
