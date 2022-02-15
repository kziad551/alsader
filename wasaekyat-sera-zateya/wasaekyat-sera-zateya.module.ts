import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WasaekyatSeraZateyaPageRoutingModule } from './wasaekyat-sera-zateya-routing.module';

import { WasaekyatSeraZateyaPage } from './wasaekyat-sera-zateya.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WasaekyatSeraZateyaPageRoutingModule,
        TranslateModule
    ],
  declarations: [WasaekyatSeraZateyaPage]
})
export class WasaekyatSeraZateyaPageModule {}
