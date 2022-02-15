import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LekaaemtjmaaPage } from './lekaaemtjmaa.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaemtjmaaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LekaaemtjmaaPage]
})
export class LekaaemtjmaaPageModule {}
