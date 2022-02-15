import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlLatmeyatPageRoutingModule } from './al-latmeyat-routing.module';

import { AlLatmeyatPage } from './al-latmeyat.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlLatmeyatPageRoutingModule,
        TranslateModule
    ],
  declarations: [AlLatmeyatPage]
})
export class AlLatmeyatPageModule {}
