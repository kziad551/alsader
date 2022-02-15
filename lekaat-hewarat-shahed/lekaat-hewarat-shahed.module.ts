import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaatHewaratShahedPageRoutingModule } from './lekaat-hewarat-shahed-routing.module';

import { LekaatHewaratShahedPage } from './lekaat-hewarat-shahed.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LekaatHewaratShahedPageRoutingModule,
        TranslateModule
    ],
  declarations: [LekaatHewaratShahedPage]
})
export class LekaatHewaratShahedPageModule {}
