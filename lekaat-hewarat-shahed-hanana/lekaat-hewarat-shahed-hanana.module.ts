import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaatHewaratShahedHananaPageRoutingModule } from './lekaat-hewarat-shahed-hanana-routing.module';

import { LekaatHewaratShahedHananaPage } from './lekaat-hewarat-shahed-hanana.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LekaatHewaratShahedHananaPageRoutingModule,
        TranslateModule
    ],
  declarations: [LekaatHewaratShahedHananaPage]
})
export class LekaatHewaratShahedHananaPageModule {}
