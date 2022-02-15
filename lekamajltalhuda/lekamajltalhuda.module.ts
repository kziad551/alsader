import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LekamajltalhudaPage } from './lekamajltalhuda.page';

const routes: Routes = [
  {
    path: '',
    component: LekamajltalhudaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LekamajltalhudaPage]
})
export class LekamajltalhudaPageModule {}
