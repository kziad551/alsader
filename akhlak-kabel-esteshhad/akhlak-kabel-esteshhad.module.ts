import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AkhlakKabelEsteshhadPage } from './akhlak-kabel-esteshhad.page';

const routes: Routes = [
  {
    path: '',
    component: AkhlakKabelEsteshhadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AkhlakKabelEsteshhadPage]
})
export class AkhlakKabelEsteshhadPageModule {}
