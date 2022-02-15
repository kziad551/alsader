import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaTaharaPage } from './mawsua-tahara.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaTaharaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaTaharaPage]
})
export class MawsuaTaharaPageModule {}
