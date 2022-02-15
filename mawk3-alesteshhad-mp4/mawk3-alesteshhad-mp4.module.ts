import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mawk3AlesteshhadMp4PageRoutingModule } from './mawk3-alesteshhad-mp4-routing.module';

import { Mawk3AlesteshhadMp4Page } from './mawk3-alesteshhad-mp4.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Mawk3AlesteshhadMp4PageRoutingModule,
        TranslateModule
    ],
  declarations: [Mawk3AlesteshhadMp4Page]
})
export class Mawk3AlesteshhadMp4PageModule {}
