import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AladabKabelAwBaadPage } from './aladab-kabel-aw-baad.page';

const routes: Routes = [
  {
    path: '',
    component: AladabKabelAwBaadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AladabKabelAwBaadPage]
})
export class AladabKabelAwBaadPageModule {}
