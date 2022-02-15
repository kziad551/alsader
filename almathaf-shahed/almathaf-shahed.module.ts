import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmathafShahedPageRoutingModule } from './almathaf-shahed-routing.module';

import { AlmathafShahedPage } from './almathaf-shahed.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlmathafShahedPageRoutingModule,
        TranslateModule
    ],
  declarations: [AlmathafShahedPage]
})
export class AlmathafShahedPageModule {}
