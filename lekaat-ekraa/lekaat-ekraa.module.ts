import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekaatEkraaPageRoutingModule } from './lekaat-ekraa-routing.module';

import { LekaatEkraaPage } from './lekaat-ekraa.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LekaatEkraaPageRoutingModule,
        TranslateModule
    ],
  declarations: [LekaatEkraaPage]
})
export class LekaatEkraaPageModule {}
