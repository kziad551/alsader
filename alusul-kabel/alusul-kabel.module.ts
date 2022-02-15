import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlusulKabelPage } from './alusul-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulKabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlusulKabelPage]
})
export class AlusulKabelPageModule {}
