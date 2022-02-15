import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmathafSuwarPageRoutingModule } from './almathaf-suwar-routing.module';

import { AlmathafSuwarPage } from './almathaf-suwar.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlmathafSuwarPageRoutingModule,
        TranslateModule
    ],
  declarations: [AlmathafSuwarPage]
})
export class AlmathafSuwarPageModule {}
