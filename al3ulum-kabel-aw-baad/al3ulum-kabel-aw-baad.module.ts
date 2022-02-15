import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Al3ulumKabelAwBaadPage } from './al3ulum-kabel-aw-baad.page';

const routes: Routes = [
  {
    path: '',
    component: Al3ulumKabelAwBaadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Al3ulumKabelAwBaadPage]
})
export class Al3ulumKabelAwBaadPageModule {}
