import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkanunKabelAwBaadPage } from './alkanun-kabel-aw-baad.page';

const routes: Routes = [
  {
    path: '',
    component: AlkanunKabelAwBaadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkanunKabelAwBaadPage]
})
export class AlkanunKabelAwBaadPageModule {}
