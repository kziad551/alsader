import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltarekhBa3dPageRoutingModule } from './altarekh-ba3d-routing.module';

import { AltarekhBa3dPage } from './altarekh-ba3d.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AltarekhBa3dPageRoutingModule,
        TranslateModule
    ],
  declarations: [AltarekhBa3dPage]
})
export class AltarekhBa3dPageModule {}
