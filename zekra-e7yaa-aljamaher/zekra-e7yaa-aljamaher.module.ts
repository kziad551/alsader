import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZekraE7yaaAljamaherPageRoutingModule } from './zekra-e7yaa-aljamaher-routing.module';

import { ZekraE7yaaAljamaherPage } from './zekra-e7yaa-aljamaher.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ZekraE7yaaAljamaherPageRoutingModule,
        TranslateModule
    ],
  declarations: [ZekraE7yaaAljamaherPage]
})
export class ZekraE7yaaAljamaherPageModule {}
