import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaatHewaratShahedDarajiPageRoutingModule } from './lekaat-hewarat-shahed-daraji-routing.module';

import { LekaatHewaratShahedDarajiPage } from './lekaat-hewarat-shahed-daraji.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LekaatHewaratShahedDarajiPageRoutingModule,
        TranslateModule
    ],
  declarations: [LekaatHewaratShahedDarajiPage]
})
export class LekaatHewaratShahedDarajiPageModule {}
