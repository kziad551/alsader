import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkanunKabelPage } from './alkanun-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: AlkanunKabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkanunKabelPage]
})
export class AlkanunKabelPageModule {}
