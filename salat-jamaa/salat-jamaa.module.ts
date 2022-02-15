import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalatJamaaPageRoutingModule } from './salat-jamaa-routing.module';

import { SalatJamaaPage } from './salat-jamaa.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SalatJamaaPageRoutingModule,
        TranslateModule
    ],
  declarations: [SalatJamaaPage]
})
export class SalatJamaaPageModule {}
