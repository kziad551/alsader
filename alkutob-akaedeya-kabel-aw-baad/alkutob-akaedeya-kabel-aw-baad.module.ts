import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkutobAkaedeyaKabelAwBaadPage } from './alkutob-akaedeya-kabel-aw-baad.page';

const routes: Routes = [
  {
    path: '',
    component: AlkutobAkaedeyaKabelAwBaadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkutobAkaedeyaKabelAwBaadPage]
})
export class AlkutobAkaedeyaKabelAwBaadPageModule {}
