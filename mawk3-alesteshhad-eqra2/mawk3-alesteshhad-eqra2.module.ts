import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mawk3AlesteshhadEqra2PageRoutingModule } from './mawk3-alesteshhad-eqra2-routing.module';

import { Mawk3AlesteshhadEqra2Page } from './mawk3-alesteshhad-eqra2.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Mawk3AlesteshhadEqra2PageRoutingModule,
        TranslateModule
    ],
  declarations: [Mawk3AlesteshhadEqra2Page]
})
export class Mawk3AlesteshhadEqra2PageModule {}
