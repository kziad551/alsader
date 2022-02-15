import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AladabKabelPage } from './aladab-kabel.page';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: AladabKabelPage
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
  declarations: [AladabKabelPage]
})
export class AladabKabelPageModule {}
