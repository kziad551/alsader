import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynEqra2PageRoutingModule } from './alnajlayn-alshahedayn-eqra2-routing.module';

import { AlnajlaynAlshahedaynEqra2Page } from './alnajlayn-alshahedayn-eqra2.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlnajlaynAlshahedaynEqra2PageRoutingModule,
        TranslateModule
    ],
  declarations: [AlnajlaynAlshahedaynEqra2Page]
})
export class AlnajlaynAlshahedaynEqra2PageModule {}
