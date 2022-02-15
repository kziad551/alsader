import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhotabalsayedSuwarPageRoutingModule } from './khotabalsayed-suwar-routing.module';

import { KhotabalsayedSuwarPage } from './khotabalsayed-suwar.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KhotabalsayedSuwarPageRoutingModule,
        TranslateModule
    ],
  declarations: [KhotabalsayedSuwarPage]
})
export class KhotabalsayedSuwarPageModule {}
