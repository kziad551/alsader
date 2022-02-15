import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaktabatAlsayedSuwarPageRoutingModule } from './maktabat-alsayed-suwar-routing.module';

import { MaktabatAlsayedSuwarPage } from './maktabat-alsayed-suwar.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MaktabatAlsayedSuwarPageRoutingModule,
        TranslateModule
    ],
  declarations: [MaktabatAlsayedSuwarPage]
})
export class MaktabatAlsayedSuwarPageModule {}
