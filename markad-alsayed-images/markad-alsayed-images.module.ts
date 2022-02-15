import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkadAlsayedImagesPageRoutingModule } from './markad-alsayed-images-routing.module';

import { MarkadAlsayedImagesPage } from './markad-alsayed-images.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MarkadAlsayedImagesPageRoutingModule,
        TranslateModule
    ],
  declarations: [MarkadAlsayedImagesPage]
})
export class MarkadAlsayedImagesPageModule {}
