import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeraAlZateyaPageRoutingModule } from './sera-al-zateya-routing.module';

import { SeraAlZateyaPage } from './sera-al-zateya.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SeraAlZateyaPageRoutingModule,
        TranslateModule
    ],
  declarations: [SeraAlZateyaPage]
})
export class SeraAlZateyaPageModule {}
