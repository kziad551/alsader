import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlejtemaaBaadPage } from './alejtemaa-baad.page';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: AlejtemaaBaadPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule
    ],
  declarations: [AlejtemaaBaadPage]
})
export class AlejtemaaBaadPageModule {}
