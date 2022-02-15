import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Khotabjmaa36Page } from './khotabjmaa36.page';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: Khotabjmaa36Page
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
  declarations: [Khotabjmaa36Page]
})
export class Khotabjmaa36PageModule {}
