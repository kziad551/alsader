import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Khotabjmaa38Page } from './khotabjmaa38.page';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: Khotabjmaa38Page
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
  declarations: [Khotabjmaa38Page]
})
export class Khotabjmaa38PageModule {}
