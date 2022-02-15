import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LekaaldarajiPage } from './lekaaldaraji.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaldarajiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LekaaldarajiPage]
})
export class LekaaldarajiPageModule {}
