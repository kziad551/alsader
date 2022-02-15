import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MawaezEkraaPageRoutingModule } from './mawaez-ekraa-routing.module';

import { MawaezEkraaPage } from './mawaez-ekraa.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MawaezEkraaPageRoutingModule,
        TranslateModule
    ],
  declarations: [MawaezEkraaPage]
})
export class MawaezEkraaPageModule {}
