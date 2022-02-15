import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlHetafatPageRoutingModule } from './al-hetafat-routing.module';

import { AlHetafatPage } from './al-hetafat.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlHetafatPageRoutingModule,
        TranslateModule
    ],
  declarations: [AlHetafatPage]
})
export class AlHetafatPageModule {}
