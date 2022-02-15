import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mawk3AlesteshhadSuwarPageRoutingModule } from './mawk3-alesteshhad-suwar-routing.module';

import { Mawk3AlesteshhadSuwarPage } from './mawk3-alesteshhad-suwar.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Mawk3AlesteshhadSuwarPageRoutingModule,
        TranslateModule
    ],
  declarations: [Mawk3AlesteshhadSuwarPage]
})
export class Mawk3AlesteshhadSuwarPageModule {}
