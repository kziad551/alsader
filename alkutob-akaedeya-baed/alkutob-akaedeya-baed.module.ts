import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlkutobAkaedeyaBaedPageRoutingModule } from './alkutob-akaedeya-baed-routing.module';

import { AlkutobAkaedeyaBaedPage } from './alkutob-akaedeya-baed.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlkutobAkaedeyaBaedPageRoutingModule,
        TranslateModule
    ],
  declarations: [AlkutobAkaedeyaBaedPage]
})
export class AlkutobAkaedeyaBaedPageModule {}
